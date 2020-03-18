import { flags } from '@oclif/command';
import BaseCommand from '../../base';
import { ConfigKeys } from '../../enums';
import { pascalCaseName, camelCaseString, listIncludes } from '../../tools';

const ensureTheNameConforms = (input: string) => `I${pascalCaseName(input)}`;

export default class ModelCommand extends BaseCommand {
  static description = 'adds a new model/interface';

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [
    {
      name: 'name',
      description: 'name of the interface/model',
    },
  ];

  async run() {
    const { args } = this.parse(ModelCommand);

    let { name: modelName } = args;

    const availableModels: string[] = this.store.get(ConfigKeys.Models);

    const PROMPT_MSG = 'Please enter name of the interface/model';

    const responses = await this.inquirer.prompt([
      {
        name: 'model',
        type: 'input',
        message: PROMPT_MSG,
        validate: (value: string) => {
          if (!value) {
            return PROMPT_MSG;
          }

          const hoc = ensureTheNameConforms(value);

          if (listIncludes(availableModels, hoc)) {
            return `${value} already exists. Please enter the name that does not exist`;
          }

          return true;
        },
        when: !args.name || listIncludes(availableModels, args.name),
      },
    ]);

    modelName = responses.model || modelName;

    const interfaceName = ensureTheNameConforms(modelName);
    const fileName = camelCaseString(modelName);

    this.fs.copyTpl(this.templatePath('model/_index.js'), this.sourceDestinationPath(`models/${fileName}.d.ts`), {
      interfaceName,
    });

    this.store.set(ConfigKeys.Models, [...this.store.get(ConfigKeys.Models), interfaceName]);

    const modelsPath = this.sourceDestinationPath('models/index.d.ts');

    // update models/index.ts to add the new namespace to the list
    this.fs.copy(modelsPath, modelsPath, {
      process(content) {
        const regEx = new RegExp(/\/\* NEW_MODEL_EXPORT_GOES_HERE \*\//, 'g');
        const newContent = content
          .toString()
          .replace(regEx, `export { ${interfaceName} } from './${fileName}';\n/* NEW_MODEL_EXPORT_GOES_HERE */`);
        return newContent;
      },
    });
  }
}
