import { flags } from '@oclif/command';
import chalk = require('chalk');
import inquirer = require('inquirer');
import BaseCommand from '../base';
import { ensureItEndsWith, listIncludes } from '../utils';
import { ConfigKeys } from '../enums';

const CONTEXT_SUFFIX = 'Context';
const ensureNameConforms = (input: string) => ensureItEndsWith(input, CONTEXT_SUFFIX);

export default class ContextCommand extends BaseCommand {
  static description = 'adds a new context';

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [
    {
      name: 'name',
      description: 'name of the context',
      parse: ensureNameConforms,
    },
  ];

  async run() {
    const { args } = this.parse(ContextCommand);

    let { name: contextName } = args;

    const availableContexts: string[] = this.store.get(ConfigKeys.Contexts);

    const responses = await inquirer.prompt([
      {
        name: 'contextName',
        type: 'input',
        message: 'Please enter name of the context',
        validate: (value: string) => {
          if (!value) {
            return 'Please enter name of the context';
          }

          const hoc = ensureNameConforms(value);

          if (listIncludes(availableContexts, hoc)) {
            return `${value} already exists. Please enter the name that does not exist`;
          }

          return true;
        },
        when: !args.name || listIncludes(availableContexts, args.name),
        filter: (input: string) => ensureNameConforms(input),
      },
    ]);

    contextName = responses.contextName || contextName;

    this.fs.copyTpl(this.templatePath('context/_index.js'), this.destinationPath(`src/contexts/${contextName}.tsx`), {
      contextName,
    });

    this.store.set(ConfigKeys.Contexts, [...this.store.get(ConfigKeys.Contexts), contextName]);

    const contextPath = this.destinationPath('src/contexts/index.ts');

    // const replatePattern = '\/* NEW_CONTEXT_IMPORT *\/';

    // update contexts/index.ts to add the new namespace to the list
    this.fs.copy(contextPath, contextPath, {
      process(content) {
        const regEx = new RegExp(/\/\* NEW_CONTEXT_IMPORT \*\//, 'g');
        const newContent = content
          .toString()
          .replace(regEx, `export { default as ${contextName} } from './${contextName}';\n/* NEW_CONTEXT_IMPORT */`);
        return newContent;
      },
    });
  }
}
