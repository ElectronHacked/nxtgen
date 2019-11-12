import { Command, flags } from '@oclif/command';
import chalk = require('chalk');
import inquirer = require('inquirer');

export default class InitCommand extends Command {
  static description = 'generates a new project';

  static flags = {
    help: flags.help({ char: 'h' }),

    // flag with no value (-a, --authentication)
    authentication: flags.boolean({ char: 'a', description: 'include authentication' }),

    // flag with no value (-g, --googleAnalytics)
    googleAnalytics: flags.boolean({ char: 'g', description: 'include Google Analytics' }),

    // flag with no value (-a, --)
    insights: flags.boolean({ char: 'i', description: 'include Application Insights' }),
  };

  static args = [{ name: 'name', required: true, description: 'name of the project' }];

  async run() {
    const { args, flags } = this.parse(InitCommand);

    const responses = await inquirer.prompt([
      {
        name: 'style',
        type: 'list',
        message: 'Please select the type of styling',
        choices: [{ name: 'Styled Components' }, { name: 'SCSS' }],
        default: 'styledComponents',
      },
    ]);

    this.log(`I would like to use ${chalk.green(responses.style)}`);

    if (args.name) {
      this.log(`The name of the project is: ${chalk.blue(args.name)}`);
    }

    const { authentication, googleAnalytics, insights } = flags;

    this.log(`${authentication ? chalk.green.bold('Has') : chalk.red('Does not have')} authentication`);

    this.log(`${googleAnalytics ? chalk.green.bold('Includes') : chalk.red('Does not include')} Google Analytics`);

    this.log(`${insights ? chalk.green.bold('Includes') : chalk.red('Does not include')} Application Insights`);
  }
}
