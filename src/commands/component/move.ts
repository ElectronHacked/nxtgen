import { flags } from '@oclif/command';
import BaseCommand from '../../base';
import { listIncludes, camelCase } from '../../tools';
import { ConfigKeys } from '../../enums';
import { IPageConfig } from '../../models';

export default class ComponentCommand extends BaseCommand {
  static description = 'moves a components and updates the config file';

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [
    {
      name: 'name',
      description: 'name of the component',
      parse: camelCase,
    },
  ];

  async run() {
    const { args } = this.parse(ComponentCommand);

    let { name: componentName } = args;

    const availableComponents: string[] = this.store.get(ConfigKeys.Components);

    const pageOptions = (this.store.get(ConfigKeys.Pages) as IPageConfig[]).map(({ path }) => path).sort();

    const NAME_PROMPT_MSG = 'Please enter name of the component';

    const responses = await this.inquirer.prompt([
      {
        name: 'componentName',
        type: 'input',
        message: NAME_PROMPT_MSG,
        validate: (value: string) => {
          if (!value) {
            return NAME_PROMPT_MSG;
          }

          const hoc = camelCase(value);

          if (listIncludes(availableComponents, hoc)) {
            return `${value} already exists. Please enter the name that does not exist`;
          }

          return true;
        },
        when: !args.name || listIncludes(availableComponents, args.name),
        filter: (input: string) => camelCase(input),
      },
      {
        name: 'pageSpecificComponent',
        type: 'confirm',
        message: 'Is this a page-specific component?',
        default: false,
      },
      {
        when({ pageSpecificComponent }) {
          return pageSpecificComponent;
        },
        type: 'list',
        name: 'pageName',
        message: 'Page name',
        choices: pageOptions,
      },
    ]);

    componentName = responses.componentName || componentName;

    this.fs.copyTpl(this.templatePath('context/_index.js'), this.destinationPath(`src/contexts/${componentName}.tsx`), {
      componentName,
    });

    this.store.set(ConfigKeys.Contexts, [...this.store.get(ConfigKeys.Contexts), componentName]);

    const contextPath = this.destinationPath('src/contexts/index.ts');

    // const replatePattern = '\/* NEW_CONTEXT_IMPORT *\/';

    // update contexts/index.ts to add the new namespace to the list
    this.fs.copy(contextPath, contextPath, {
      process(content) {
        const regEx = new RegExp(/\/\* NEW_CONTEXT_IMPORT \*\//, 'g');
        const newContent = content
          .toString()
          .replace(regEx, `export { default as ${componentName} from './${componentName}';\n/* NEW_CONTEXT_IMPORT */`);
        return newContent;
      },
    });
  }
}
