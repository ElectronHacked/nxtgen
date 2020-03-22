import { flags } from '@oclif/command';
import { ensureItStartsWith, listIncludes } from '../../tools';
import BaseCommand from '../../base';
import { ConfigKeys } from '../../enums';
import chalk = require('chalk');

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
      parse: (input: string) => ensureItStartsWith(input, HOC_PREFIX, false),
    },
  ];

  async run() {
    const { args } = this.parse(HocCommand);

    let { name: hocName } = args;

    const availableHocs: string[] = this.store.get(ConfigKeys.Hocs);

    const responses = await this.inquirer.prompt([
      {
        name: 'responses',
        type: 'input',
        message: 'Please enter name of the HOC',
        validate: (value: string) => {
          if (!value) {
            return 'Please enter name of the HOC';
          }

          const hoc = ensureItStartsWith(value, HOC_PREFIX, false);

          if (listIncludes(availableHocs, hoc)) {
            return `${chalk.red.bold(hoc)} already exists. Please enter the name that does not exist`;
          }

          return true;
        },
        when: !args.name || listIncludes(availableHocs, args.name),
        filter: (input: string) =>
          listIncludes(availableHocs, ensureItStartsWith(input, HOC_PREFIX, false))
            ? input
            : ensureItStartsWith(input, HOC_PREFIX, false),
      },
    ]);

    hocName = responses.responses || hocName;

    this.fs.copyTpl(this.templatePath('hoc/_index.js'), this.sourceDestinationPath(`hocs/${hocName}.tsx`), { hocName });

    this.store.set(ConfigKeys.Hocs, [...this.store.get(ConfigKeys.Hocs), hocName]);

    const hocsPath = this.sourceDestinationPath('hocs/index.ts');

    // update hocs/index.ts to add the new namespace to the list
    this.fs.copy(hocsPath, hocsPath, {
      process(content) {
        const regEx = new RegExp(/\/\* NEW_HOC_EXPORT_GOES_HERE \*\//, 'g');
        const newContent = content
          .toString()
          .replace(regEx, `export { ${hocName} } from './${hocName}';\n/* NEW_HOC_EXPORT_GOES_HERE */`);
        return newContent;
      },
    });

    this.logAffectedFiles();
  }
}
