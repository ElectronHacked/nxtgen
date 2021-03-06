import { Command } from '@oclif/command';
import { IConfig } from '@oclif/config';
import makeDir = require('make-dir');
const { spawn } = require('child_process');
import path = require('path');
import fs = require('fs-extra');
import memFs = require('mem-fs');
import FileEditor = require('mem-fs-editor');
import Conf = require('conf');
import chalk = require('chalk');
import inquirer = require('inquirer');
import { FileCreationState } from '../enums';
const copyTemplateDir = require('copy-template-dir');
const escapeStringRegexp = require('escape-string-regexp');
const mkdirp = require('mkdirp');

// Register inquirer plugins
inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));
inquirer.registerPrompt('checkbox-plus', require('inquirer-checkbox-plus-prompt'));
inquirer.registerPrompt('suggest', require('inquirer-prompt-suggest'));
inquirer.registerPrompt('fuzzypath', require('inquirer-fuzzy-path'));

type CopyCallback = (err: Error, createdFiles: string[]) => void;

abstract class BaseCommand extends Command {
  public store: Conf<any>;
  public inquirer: inquirer.Inquirer;
  public mkdirp = mkdirp;
  public copyTemplateDir: (
    templateDir: string,
    targetDir: string,
    vars: { [key: string]: string | boolean },
    cb: CopyCallback
  ) => void;
  readonly fs: FileEditor.Editor;
  private _destinationRoot: string;
  private _sourceRoot: string;
  private sharedFs: memFs.Store;

  constructor(argv: string[], config: IConfig) {
    super(argv, config);

    this._destinationRoot = '';
    this._sourceRoot = '';
    this.copyTemplateDir = copyTemplateDir;
    this.inquirer = inquirer;
    this.store = new Conf({
      configName: '.ngen.conf',
      clearInvalidConfig: false, // The user might want to edit the config and when that happens, we do not want the user to lose all data. Rather throw an exception
      cwd: this.rootDestinationPath('./'), // I want the config file to be stored within the root directory of the project
    });

    const sharedFs = memFs.create();
    this.sharedFs = sharedFs;
    this.fs = FileEditor.create(sharedFs);

    sharedFs.on('change', this._writeFiles.bind(this));
  }

  /**
   * Change the generator destination root directory.
   * This path is used to find storage, when using a file system helper method (like
   * `this.write` and `this.copy`)
   * @param  {String} rootPath new destination root path
   * @return {String}          destination root path
   */
  destinationRoot(rootPath?: string) {
    if (typeof rootPath === 'string') {
      this._destinationRoot = path.resolve(rootPath);

      if (!fs.existsSync(rootPath)) {
        makeDir.sync(rootPath);
      }

      process.chdir(rootPath);

      // Reset the storage
      this.store.clear();
    }

    return this._destinationRoot || process.cwd();
  }

  /**
   * Logs all the files which have been affected to the console - created and modified files
   */
  logAffectedFiles() {
    this.log();
    this.sharedFs.each(file => {
      // Files which are affected will have `isNew` property
      if (file.hasOwnProperty('isNew')) {
        let state = FileCreationState.Created;
        let chackColor = chalk.green;
        const fileName = file.history[0];

        if (!file.isNew) {
          state = FileCreationState.Modified;
          chackColor = chalk.yellow;
        }

        this.log(`${chackColor.bold(state)}: ${fileName}`);
      }
    });
  }

  /**
   * Change the generator source root directory.
   * This path is used by multiples file system methods like (`this.read` and `this.copy`)
   * @param  {String} rootPath new source root path
   * @return {String}          source root path
   */
  sourceRoot(rootPath?: string) {
    if (typeof rootPath === 'string') {
      this._sourceRoot = path.resolve(rootPath);
    }

    return this._sourceRoot;
  }

  /**
   * Join a path to the source root.
   * @param  {...String} path
   * @return {String}    joined path
   */
  templatePath(targetPath: string) {
    let filepath = path.resolve(__dirname, `../templates/${targetPath}`);

    if (!path.isAbsolute(filepath)) {
      filepath = path.join(this.sourceRoot(), filepath);
    }

    return filepath;
  }

  /**
   * Join a path to the source root.
   * @param  {...String} path
   * @return {String}    joined path
   */
  dirPath(targetPath: string): string {
    let filepath = path.resolve(__dirname, `../templates/${targetPath}`);

    if (!path.isAbsolute(filepath)) {
      filepath = path.join(this.sourceRoot(), filepath);
    }

    return filepath;
  }

  /**
   * Join a path to the destination root.
   * @param  {...String} path
   * @return {String}    joined path
   */
  rootDestinationPath(...args: string[]) {
    let filepath = path.join.apply(path, args);

    if (!path.isAbsolute(filepath)) {
      filepath = path.join(this.destinationRoot(), filepath);
    }

    return filepath;
  }

  /**
   * Join a path to the source destination root.
   * @param  {...String} path
   * @return {String}    joined path
   */
  sourceDestinationPath(...args: string[]): string {
    let filepath = `src/${path.join.apply(path, args)}`;

    if (!path.isAbsolute(filepath)) {
      filepath = path.join(this.destinationRoot(), filepath);
    }

    return filepath;
  }

  /**
   * Join a path to the source directory
   * @param  {...String} path
   * @return {String}    joined path
   */
  sourcePath(destination: string): string {
    return path.resolve(`./src/${destination}`);
  }

  replaceContent(path: string, content: string, pattern: string, newLineStart = true, newLineEnd = true) {
    const preparedPattern = `/* ${pattern} */`;

    const prefixNewLine = newLineStart ? '\n' : '';
    const suffixNewLine = newLineEnd ? '\n' : '';

    const value = this.fs.read(path);
    const regEx = new RegExp(escapeStringRegexp(preparedPattern), 'g');

    if (value.includes(content)) {
      this.log(`Value already includes contents`);
    }

    const result = value.replace(regEx, `${content}${prefixNewLine}${preparedPattern}${suffixNewLine}`);

    this.fs.write(path, result);
  }

  /**
   * Write memory fs file to disk and logging results
   * @private
   */
  private _writeFiles() {
    if (this.fs) {
      // Whenever a file shanges, we just store the those files in the copy of changed files for later logging
      // this._sharedFsCopy = this.sharedFs;

      this.fs.commit(err => {
        if (err) {
          this.error(`Sorry, an ${chalk.red.bold('error')} occured while persisting the data`);
        }
      });
    }
  }
}

export default BaseCommand;
