import { Command, flags } from '@oclif/command';
import { ensureItStartsWith } from '../utils';
import chalk = require('chalk');

const HOC_PREFIX = 'with';

export default class HocCommand extends Command {
  static description = 'adds a new Higher-Order Component';

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [
    {
      name: 'name',
      description: 'name of the higher-order component',
      required: true,
      parse: (input: string) => ensureItStartsWith(input, HOC_PREFIX),
    },
  ];

  async run() {
    const { args } = this.parse(HocCommand);

    this.log(`The name of the hoc is: ${chalk.green(args.name)}`);
  }
}
