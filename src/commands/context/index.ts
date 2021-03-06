import { flags } from '@oclif/command';
import BaseCommand from '../../base';
import { ensureItEndsWith, listIncludes, camelCaseString } from '../../tools';
import { ConfigKeys } from '../../enums';
import chalk = require('chalk');

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

    const NAME_PROMPT_MSG = 'Please enter name of the context';

    const responses = await this.inquirer.prompt([
      {
        name: 'contextName',
        type: 'input',
        message: NAME_PROMPT_MSG,
        validate: (value: string) => {
          if (!value) {
            return NAME_PROMPT_MSG;
          }

          const context = ensureNameConforms(value);

          if (listIncludes(availableContexts, context)) {
            return `${chalk.red.bold(context)} already exists. Please enter the name that does not exist`;
          }

          return true;
        },
        when: !args.name || listIncludes(availableContexts, args.name),
        filter: (input: string) =>
          listIncludes(availableContexts, ensureNameConforms(input)) ? input : ensureNameConforms(input),
      },
    ]);

    contextName = responses.contextName || contextName;
    const contextNameCamelCase = camelCaseString(contextName);

    this.fs.copyTpl(
      this.templatePath('context/_index.js'),
      this.sourceDestinationPath(`contexts/${contextNameCamelCase}.tsx`),
      {
        contextName,
      }
    );

    this.store.set(ConfigKeys.Contexts, [...this.store.get(ConfigKeys.Contexts), contextName]);

    const contextPath = this.rootDestinationPath('src/contexts/index.ts');

    // update contexts/index.ts to add the new namespace to the list
    this.fs.copy(contextPath, contextPath, {
      process(content) {
        const regEx = new RegExp(/\/\* NEW_CONTEXT_EXPORT_GOES_HERE \*\//, 'g');
        const newContent = content
          .toString()
          .replace(
            regEx,
            `export { ${contextName} } from './${contextNameCamelCase}';\n/* NEW_CONTEXT_EXPORT_GOES_HERE */`
          );
        return newContent;
      },
    });

    this.logAffectedFiles();
  }
}
