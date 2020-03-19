import { flags } from '@oclif/command';
import BaseCommand from '../../base';
import { camelCaseString, pascalCaseName, hiphenizeString, getRelativePathStringFrom } from '../../tools';
import { ConfigKeys } from '../../enums';

export default class ComponentCommand extends BaseCommand {
  static description = 'adds a new component';

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [
    {
      name: 'name',
      description: 'name of the component',
      parse: camelCaseString,
    },
  ];

  async run() {
    let { args } = this.parse(ComponentCommand);

    let { name: componentName } = args;

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

          return true;
        },
        when: !args.name,
        filter: (input: string) => camelCaseString(input),
      },
      {
        type: 'fuzzypath',
        itemType: 'directory',
        name: 'componentStorage',
        message: 'Select a target directory for your component',
        rootPath: this.sourceDestinationPath('components'),
        suggestOnly: false,
      },
    ]);

    let {
      componentPromptName,
      componentStorage,
    }: { componentPromptName: string; componentStorage: string } = responses;

    const componentAbsolutePath = getRelativePathStringFrom(componentStorage, 'components');

    if (componentAbsolutePath === '') {
      componentStorage = `${componentStorage}/global`;
    }

    componentName = componentPromptName || componentName;

    this.log(`componentStorage: ${componentStorage}`);

    const componentNameCamelCase = camelCaseString(componentName);
    const componentNamePascalCase = pascalCaseName(componentName);

    const relativePath = `${componentStorage}/${componentNameCamelCase}`.split('components')[1].replace(/\\/g, '/');

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
        const regEx = new RegExp(/\/\* NEW_COMPONENT_EXPORT_GOES_HERE \*\//, 'g');
        const newContent = content
          .toString()
          .replace(
            regEx,
            `export { default as ${componentNamePascalCase} } from '.${relativePath}';\n/* NEW_COMPONENT_EXPORT_GOES_HERE */`
          );
        return newContent;
      },
    });
  }
}
