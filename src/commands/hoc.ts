import { Command, flags } from '@oclif/command';

export default class HocCommand extends Command {
  static description = 'adds a new Higher-Order Component';

  static flags = {
    help: flags.help({ char: 'h' }),

    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'name of the project' }),

    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
  };

  static args = [{ name: 'file' }];

  async run() {
    const { args, flags } = this.parse(HocCommand);

    const name = flags.name || 'world';
    this.log(`hello ${name} from .\\src\\commands\\hello.ts`);

    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}
