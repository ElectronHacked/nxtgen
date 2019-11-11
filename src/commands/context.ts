import { Command, flags } from '@oclif/command';
import camelcase from 'camelcase';
import chalk = require('chalk');

const CONTEXT_SUFFIX = 'Context';

export default class ContextCommand extends Command {
  static description = 'adds a new context';

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [
    {
      name: 'name',
      description: 'name of the context',
      required: true,
      parse: (input: string) =>
        input.endsWith(CONTEXT_SUFFIX)
          ? camelcase(input, { pascalCase: true })
          : `${camelcase(input, { pascalCase: true })}${CONTEXT_SUFFIX}`,
    },
  ];

  async run() {
    const { args } = this.parse(ContextCommand);

    this.log(`The name of the context is: ${chalk.green(args.name)}`);
  }
}
