import { Command, flags } from '@oclif/command';
import Listr = require('listr');
import { makeGetRequest } from '../../tools';
import chalk = require('chalk');

export default class SwagCommand extends Command {
  static description = 'adds/updates a swagger file and regenerates the APIs';

  static flags = {
    help: flags.help({ char: 'h' }),

    // flag with a value (-u, --username=VALUE)
    username: flags.string({ char: 'u', description: 'username of the server that hosts the swagger file' }),

    // flag with a value (-u, --username=VALUE)
    password: flags.string({ char: 'p', description: 'password of the server that hosts the swagger file' }),
  };

  static args = [{ name: 'name', required: true, description: 'name of the destination file' }];

  async run() {
    const { flags, args } = this.parse(SwagCommand);

    const { username, password } = flags;

    const task = new Listr([
      {
        title: 'Fetch image',
        task: () => makeGetRequest('https://dog.ceo/api/breeds/image/random'),
      },
    ]);

    task.run().catch(error => this.error(error));

    this.log(`The username is ${chalk.green(username)}`);

    this.log(`The password is ${chalk.green(password)}`);

    this.log(`The file name is ${chalk.green(args.name)}`);
  }
}
