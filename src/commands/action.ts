import { Command, flags } from '@oclif/command';
import chalk = require('chalk');
import camelcase from 'camelcase';
import inquirer = require('inquirer');

export default class ActionCommand extends Command {
  static description = 'adds a new redux store to the project';

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [
    {
      name: 'name',
      description: 'name of the store',
      required: true,
      parse: (input: string) => camelcase(input, { pascalCase: true }),
    },
  ];

  async run() {
    const { args } = this.parse(ActionCommand);

    const responses = await inquirer.prompt([
      {
        name: 'style',
        type: 'list',
        message: 'Please select the type of styling',
        choices: [{ name: 'styledComponents', short: 'Styled Components' }, { name: 'SCSS' }],
        default: 'styledComponents',
      },
    ]);

    this.log(`I would like to use ${chalk.green(responses.style)}`);

    this.log(`The name of the action is: ${chalk.green(args.name)}`);
  }
}
