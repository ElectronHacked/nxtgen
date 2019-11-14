import { Command, flags } from '@oclif/command';
import { IConfig } from '@oclif/config';
import makeDir = require('make-dir');
import fs = require('fs');
import path = require('path');
import memFs = require('mem-fs');
import FileEditor = require('mem-fs-editor');
import { Storage } from '../utils';
const readPkgUp = require('read-pkg-up');

abstract class BaseCommand extends Command {
  readonly fs: FileEditor.Editor;
  private _destinationRoot: string;
  private _sourceRoot: string;
  store: Storage;

  constructor(argv: string[], config: IConfig) {
    super(argv, config);

    this._destinationRoot = '';
    this._sourceRoot = '';
    
    const sharedFs = memFs.create();
    this.fs = FileEditor.create(sharedFs);
    this.store = this._getStorage();
  }

  /**
   * Determine the root generator name (the one who's extending Generator).
   * @return {String} The name of the root generator
   */
  rootGeneratorName() {
    const pkg = readPkgUp.sync().pkg;
    return pkg ? pkg.name : '*';
  }

  /**
   * Return a storage instance.
   * @param  {String} rootName  The rootName in which is stored inside .yo-rc.json
   * @return {Storage} Generator storage
   * @private
   */
  _getStorage(rootName = this.rootGeneratorName()) {
    const storePath = path.join(this.destinationRoot(), '.nxtgen.json');
    return new Storage(rootName, this.fs, storePath);
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
      this.store = this._getStorage();
    }

    return this._destinationRoot || process.cwd();
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
    let filepath = path.resolve(__dirname, `../templates/${targetPath}`)

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
  destinationPath(...args: string[]) {
    let filepath = path.join.apply(path, ['../templates/', ...args]);

    if (!path.isAbsolute(filepath)) {
      filepath = path.join(this.destinationRoot(), filepath);
    }

    return filepath;
  }
}

export default BaseCommand;
