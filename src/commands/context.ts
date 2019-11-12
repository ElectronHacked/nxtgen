import { Command, flags } from '@oclif/command';
import chalk = require('chalk');
import { ensureItEndsWith } from '../utils';

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
      parse: (input: string) => ensureItEndsWith(input, CONTEXT_SUFFIX),
    },
  ];

  async run() {
    const { args } = this.parse(ContextCommand);

    this.log(`The name of the context is: ${chalk.green(args.name)}`);
  }
}
