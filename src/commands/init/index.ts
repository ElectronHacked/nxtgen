import { flags } from '@oclif/command';
import mkdirp = require('mkdirp');
import decamelize = require('decamelize');
import BaseCommand from '../../base';

export default class InitCommand extends BaseCommand {
  static description = 'generates a new project';

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [
    {
      name: 'name',
      description: 'name of the project',
      parse: (input: string) => (input ? decamelize(input.split(' ').join('-'), '-') : input),
    },
  ];

  async run() {
    const { args } = this.parse(InitCommand);

    let projectName: string = args.name;

    const responses = await this.inquirer.prompt([
      {
        name: 'applicationName',
        type: 'input',
        message: 'Please enter the name of the project',
        validate: (value: string) => {
          if (!value) {
            return 'Please enter the name of the project';
          }

          return true;
        },
        when: !args.name,
        filter: (input: string) => (input ? decamelize(input.split(' ').join('-'), '-') : input),
      },
    ]);

    if (!projectName) {
      projectName = decamelize(responses.applicationName.split(' ').join('-'), '-');
    }

    // create folder project
    mkdirp(projectName);

    // change project root to the new folder
    this.destinationRoot(this.rootDestinationPath(projectName));

    // copy package.json and update some values
    this.fs.copyTpl(this.templatePath('init/_package.json'), this.rootDestinationPath('package.json'), {
      projectName,
    });

    // copy package.json and update some values
    this.fs.copyTpl(this.templatePath('init/_.ngen.conf.json'), this.rootDestinationPath('.ngen.conf.json'), {
      projectName,
    });

    //#region Copy all the .files
    this.fs.copyTpl(this.templatePath('init/_.babelrc'), this.rootDestinationPath('.babelrc'));

    this.fs.copyTpl(this.templatePath('init/_.eslintignore'), this.rootDestinationPath('.eslintignore'));

    this.fs.copyTpl(this.templatePath('init/_.eslintrc'), this.rootDestinationPath('.eslintrc'));

    this.fs.copyTpl(this.templatePath('init/_.gitattributes'), this.rootDestinationPath('.gitattributes'));

    this.fs.copyTpl(this.templatePath('init/_.gitignore'), this.rootDestinationPath('.gitignore'));

    this.fs.copyTpl(this.templatePath('init/_.prettierrc'), this.rootDestinationPath('.prettierrc'));
    //#endregion

    // Now, generate the project
    this.fs.copy(this.templatePath('init/app'), this.rootDestinationPath('./'));

    this.logAffectedFiles();
  }
}
