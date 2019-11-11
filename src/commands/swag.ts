import { Command, flags } from '@oclif/command';

export default class Init extends Command {
  static description = 'adds/updates a swagger file and regenerates the APIs';

  static flags = {
    help: flags.help({ char: 'h' }),

    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'name of the project' }),

    // flag with no value (-a, --authentication)
    authentication: flags.boolean({ char: 'a', description: 'include authentication' }),

    // flag with no value (-g, --googleAnalytics)
    googleAnalytics: flags.boolean({ char: 'g', description: 'include Google Analytics' }),

    // flag with no value (-a, --)
    insights: flags.boolean({ char: 'i', description: 'include Application Insights' }),
  };

  static args = [{ name: 'file' }];

  async run() {
    const { args, flags } = this.parse(Init);
  }
}
