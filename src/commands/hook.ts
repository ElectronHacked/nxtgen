import { Command, flags } from '@oclif/command';
import camelcase from 'camelcase';
import chalk = require('chalk');

const hookPrefix = 'use';

export default class HookCommand extends Command {
  static description = 'adds a new hook';

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [
    {
      name: 'name',
      description: 'name of the hook',
      required: true,
      parse: (input: string) =>
        input.startsWith(hookPrefix) ? input : `${hookPrefix}${camelcase(input, { pascalCase: true })}`,
    },
  ];

  async run() {
    const { args } = this.parse(HookCommand);

    this.log(`The name of the hook is: ${chalk.green(args.name)}`);
  }
}
