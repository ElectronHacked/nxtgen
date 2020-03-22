import { flags } from '@oclif/command';
import chalk = require('chalk');
import mkdirp = require('mkdirp');
import decamelize = require('decamelize');
import BaseCommand from '../../base';

export default class InitCommand extends BaseCommand {
  static description = 'generates a new project hahaha';

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

    // Now, generate the project
    this.copyTemplateDir(
      this.templatePath('app'),
      this.rootDestinationPath('./'),
      { projectName },
      (err, createdFiles) => {
        if (err) throw err;
        createdFiles.forEach((filePath: string) => this.log(`${chalk.green('Created')} ${filePath}`));
      }
    );

    this.logAffectedFiles();
  }
}
