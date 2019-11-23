import { flags } from '@oclif/command';
import BaseCommand from '../../base';
import { listIncludes, camelCaseString, pascalCaseName, hiphenizeString, getRelativePathStringFrom } from '../../tools';
import { ConfigKeys, ComponentStorageOptions } from '../../enums';
const fuzzy = require('fuzzy');
import _ = require('lodash');

export default class ComponentCommand extends BaseCommand {
  static description = 'adds a new component';

  static flags = {
    help: flags.help({ char: 'h' }),
    global: flags.boolean({ char: 'g', description: 'whether a component is global' }),
    componentNested: flags.boolean({ char: 'h', description: "whether it's nested within another component" }),
    pageNested: flags.boolean({ char: 'h', description: "whether it's nested within a page" }),
  };

  static args = [
    {
      name: 'name',
      description: 'name of the component',
      parse: camelCaseString,
    },
  ];

  async run() {
    let {
      args,
      flags: { global, componentNested, pageNested },
    } = this.parse(ComponentCommand);

    const countBooleanFlags = [global, componentNested, pageNested].filter(f => f === true).length;

    const noComponentStorageDefined = !countBooleanFlags;

    let { name: componentName } = args;

    const availableComponents: string[] = this.store.get(ConfigKeys.Components);

    const componentStorageOptions = Object.values(ComponentStorageOptions).map(v => v as string);

    const NAME_PROMPT_MSG = 'Please enter name of the component';
    
    const responses = await this.inquirer.prompt([
      {
        name: 'componentPromptName',
        type: 'input',
        message: NAME_PROMPT_MSG,
        validate: (value: string) => {
          if (!value) {
            return NAME_PROMPT_MSG;
          }
          
          const hoc = camelCaseString(value);
          
          if (listIncludes(availableComponents, hoc)) {
            return `${value} already exists. Please enter the name that does not exist`;
          }
          
          return true;
        },
        when: !args.name || listIncludes(availableComponents, args.name),
        filter: (input: string) => camelCaseString(input),
      },
      {
        type: 'fuzzypath',
        itemType: 'directory',
        name: 'componentStorage',
        message: 'Select a target directory for your component',
        rootPath: this.sourceDestinationPath('components'),
        suggestOnly: false,
        when: noComponentStorageDefined || countBooleanFlags > 1,
      },
    ]);
    
    let {
      componentPromptName,
      componentStorage,
    }: { componentPromptName: string; componentStorage: string } = responses;
    
    const componentAbsolutePath = getRelativePathStringFrom(componentStorage, 'components');

    this.log(`componentAbsolutePath: ${componentAbsolutePath}`)

    if (componentAbsolutePath === '') {
      componentStorage = `${componentStorage}/global`
    }

    componentName = componentPromptName || componentName;

    const componentNameCamelCase = camelCaseString(componentName);
    const componentNamePascalCase = pascalCaseName(componentName);

    const className = hiphenizeString(componentName);

    this.fs.copyTpl(
      this.templatePath('component/_index.js'),
      `${componentStorage}/${componentNameCamelCase}/index.tsx`,
      {
        componentName: componentNamePascalCase,
        className,
      }
    );

    // // copy styles.scss
    this.fs.copyTpl(
      this.templatePath('component/_styles.scss'),
      `${componentStorage}/${componentNameCamelCase}/styles.scss`,
      {
        className,
      }
    );

    const componentPath = this.sourceDestinationPath('components/index.ts');


    // update contexts/index.ts to add the new namespace to the list
    this.fs.copy(componentPath, componentPath, {
      process(content) {
        const regEx = new RegExp(/\/\* NEW_COMPONENT_IMPORT \*\//, 'g');
        const newContent = content
          .toString()
          .replace(
            regEx,
            `export { default as ${componentNamePascalCase} } from '.${componentAbsolutePath}';\n/* NEW_COMPONENT_IMPORT */`
          );
        return newContent;
      },
    });
  }
}
