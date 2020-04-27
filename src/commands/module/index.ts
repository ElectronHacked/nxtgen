import { flags } from '@oclif/command';
import mkdirp = require('mkdirp');
import decamelize = require('decamelize');
import BaseCommand from '../../base';
import { camelCaseString } from '../../tools';

export default class ModuleCommand extends BaseCommand {
  static description = 'generates a new module hahaha';

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [
    {
      name: 'name',
      description: 'name of the module',
      parse: (input: string) => (input ? decamelize(input.split(' ').join('-'), '-') : input),
    },
  ];

  async run() {
    const { args } = this.parse(ModuleCommand);

    let moduleName: string = args.name;

    const responses = await this.inquirer.prompt([
      {
        name: 'moduleName',
        type: 'input',
        message: 'Please enter the name of the module',
        validate: (value: string) => {
          if (!value) {
            return 'Please enter the name of the module';
          }

          return true;
        },
        when: !args.name,
        filter: (input: string) => (input ? camelCaseString(input) : input),
      },
    ]);

    if (!moduleName) {
      moduleName = camelCaseString(responses.moduleName);
    }

    const PAGE_NAME = 'Dashboard';

    const CLASS_NAME = PAGE_NAME.toLowerCase();

    // create folder module
    mkdirp(this.sourceDestinationPath(`modules/${moduleName}`));

    // copy page into the pages folder
    this.fs.copyTpl(this.templatePath('page/_index.js'), `${CLASS_NAME}/${PAGE_NAME}/index.tsx`, {
      componentName: PAGE_NAME,
      title: PAGE_NAME,
      className: CLASS_NAME,
    });

    // // copy styles.scss
    this.fs.copyTpl(this.templatePath('page/_styles.scss'), `${CLASS_NAME}/${PAGE_NAME}/styles.scss`, {
      className: CLASS_NAME,
    });

    this.logAffectedFiles();
  }
}
