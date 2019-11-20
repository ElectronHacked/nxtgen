import { flags } from '@oclif/command';
import chalk = require('chalk');
const mkdirp = require('mkdirp');
import decamelize = require('decamelize');
import { PREPROCESSOR, WEB_TRACKING } from '../config';
import BaseCommand from '../base';

export default class InitCommand extends BaseCommand {
  static description = 'generates a new project';

  static flags = {
    help: flags.help({ char: 'h' }),

    // flag with no value (-a, --authentication)
    authentication: flags.boolean({ char: 'a', description: 'include authentication' }),

    // flag with no value (-g, --googleAnalytics)
    googleAnalytics: flags.boolean({ char: 'g', description: 'include Google Analytics' }),

    // flag with no value (-a, --insights)
    insights: flags.boolean({ char: 'i', description: 'include Application Insights' }),

    // flag with no value (-f, --force)
    force: flags.boolean({
      char: 'f',
      description:
        'does not ask the user to confirm if they do not want any of authentication, googleAnalytics or insights',
    }),
  };

  static args = [
    {
      name: 'name',
      description: 'name of the project',
      parse: (input: string) => (input ? decamelize(input.split(' ').join('-'), '-') : input),
    },
  ];

  async run() {
    const { args, flags } = this.parse(InitCommand);
    let { authentication, googleAnalytics, insights, force } = flags;

    let projectName: string = args.name;

    const hasNotProvidedAnyBooleanFlag = !authentication && !googleAnalytics && !insights && !force;

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
      {
        name: 'preprocessor',
        type: 'list',
        message: 'Please select the type of styling',
        choices: Object.values(PREPROCESSOR),
        default: 'styledComponents',
      },
      {
        name: 'authentication',
        type: 'confirm',
        message: 'Do you want to include authentication?',
        when: hasNotProvidedAnyBooleanFlag,
        default: true,
      },
      {
        name: 'tracking',
        type: 'checkbox',
        message: 'Select any tracking mechanism',
        choices: Object.values(WEB_TRACKING),
        when: hasNotProvidedAnyBooleanFlag,
      },
    ]);

    if (!projectName) {
      projectName = decamelize(responses.applicationName.split(' ').join('-'), '-');
    }

    // create folder project
    mkdirp(projectName);

    // change project root to the new folder
    this.destinationRoot(this.destinationPath(projectName));

    if (hasNotProvidedAnyBooleanFlag) {
      authentication = responses.authentication;
      googleAnalytics = responses.tracking.includes(WEB_TRACKING.ga);
      insights = responses.tracking.includes(WEB_TRACKING.ai);
    }

    // Now, generate the project
    this.copyTemplateDir(
      this.templatePath('app'),
      this.destinationPath('./'),
      { projectName, preprocessor: responses.preprocessor, googleAnalytics, applicationInsights: insights },
      (err, createdFiles) => {
        if (err) throw err;
        createdFiles.forEach((filePath: string) => this.log(`${chalk.green('Created')} ${filePath}`));
      }
    );

    this.log(`this.store.path: ${this.store.path}`);
  }
}
