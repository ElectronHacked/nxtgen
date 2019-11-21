import { Command, flags } from '@oclif/command';
import chalk = require('chalk');
import camelcase from 'camelcase';

export default class StoreCommand extends Command {
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
    const { args } = this.parse(StoreCommand);

    this.log(`The name of the store is: ${chalk.green(args.name)}`);
  }
}
