import { Command, flags } from '@oclif/command';
import chalk = require('chalk');
import { ensureItStartsWith } from '../utils';

const HOOK_PREFIX = 'use';

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
      parse: (input: string) => ensureItStartsWith(input, HOOK_PREFIX),
    },
  ];

  async run() {
    const { args } = this.parse(HookCommand);

    this.log(`The name of the hook is: ${chalk.green(args.name)}`);
  }
}
