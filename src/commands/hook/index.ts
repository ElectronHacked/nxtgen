import { flags } from '@oclif/command';
import BaseCommand from '../../base';
import { ensureItStartsWith, listIncludes } from '../../tools';
import { ConfigKeys } from '../../enums';
import chalk = require('chalk');

const HOOK_PREFIX = 'use';
const ensureNameConforms = (input: string) => ensureItStartsWith(input, HOOK_PREFIX);

export default class HookCommand extends BaseCommand {
  static description = 'adds a new hook';

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [
    {
      name: 'name',
      description: 'name of the hook',
      parse: ensureNameConforms,
    },
  ];

  async run() {
    const { args } = this.parse(HookCommand);

    let { name: hookName } = args;

    const availableHooks: string[] = this.store.get(ConfigKeys.Hooks);

    const PROMPT_MSG = 'Please enter name of the hook (should start with "use")';

    const responses = await this.inquirer.prompt([
      {
        name: 'hookName',
        type: 'input',
        message: PROMPT_MSG,
        validate: (value: string) => {
          if (!value) {
            return PROMPT_MSG;
          }

          const hook = ensureNameConforms(value);

          if (listIncludes(availableHooks, hook)) {
            return `${chalk.red.bold(hook)} already exists. Please enter the name that does not exist`;
          }

          return true;
        },
        when: !args.name || listIncludes(availableHooks, args.name),
        filter: (input: string) =>
          listIncludes(availableHooks, ensureNameConforms(input)) ? input : ensureNameConforms(input),
      },
    ]);

    hookName = responses.hookName || hookName;

    this.fs.copyTpl(this.templatePath('hook/_index.js'), this.sourceDestinationPath(`hooks/${hookName}.tsx`), {
      hookName,
    });

    this.store.set(ConfigKeys.Hooks, [...this.store.get(ConfigKeys.Hooks), hookName]);

    const hookPath = this.sourceDestinationPath('hooks/index.ts');

    // update hooks/index.ts to add the new namespace to the list
    this.fs.copy(hookPath, hookPath, {
      process(content) {
        const regEx = new RegExp(/\/\* NEW_HOOK_EXPORT_GOES_HERE \*\//, 'g');
        const newContent = content
          .toString()
          .replace(regEx, `export { ${hookName} } from './${hookName}';\n/* NEW_HOOK_EXPORT_GOES_HERE */`);
        return newContent;
      },
    });

    this.logAffectedFiles();
  }
}
