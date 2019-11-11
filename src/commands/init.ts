import { Command, flags } from '@oclif/command';
import chalk = require('chalk');

export default class Init extends Command {
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
    const { args, flags } = this.parse(Init);
    if (args.name) {
      this.log(`The name of the project is: ${args.name}`);
    } else {
      this.error(`Please make sure that you provide the ${chalk.red.bold('name')} of the project`);
    }

    const { authentication, googleAnalytics, insights } = flags;

    this.log(`${authentication ? chalk.green.bold('Has') : chalk.red('Does not have')} authentication`);

    this.log(`${googleAnalytics ? chalk.green.bold('Includes') : chalk.red('Does not include')} Google Analytics`);

    this.log(`${insights ? chalk.green.bold('Includes') : chalk.red('Does not include')} Application Insights`);
  }
}
