import { flags } from '@oclif/command';
import { ensureItStartsWith } from '../utils';
import chalk = require('chalk');
import BaseCommand from '../base';

const HOC_PREFIX = 'with';

export default class HocCommand extends BaseCommand {
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

    const { name: hocName } = args;

    // Now, generate the project
    this.copy(
      this.templatePath('hoc/_index.js'),
      this.destinationPath(`src/hocs/${args.name}.tsx`),
      { hocName },
      (err, createdFiles) => {
        if (err) throw err;
        createdFiles.forEach((filePath: string) => this.log(`${chalk.green('Created')} ${filePath}`));
      }
    );

    const STORE_KEY = 'hocs';

    this.store.set(STORE_KEY, [...this.store.get(STORE_KEY), hocName])
  }
}
