import { flags } from '@oclif/command';
import { listIncludes, pascalCaseName, camelCaseString } from '../../tools';
import BaseCommand from '../../base';
import { ConfigKeys } from '../../enums';
import chalk = require('chalk');

export default class EnumCommand extends BaseCommand {
  static description = 'adds a new enum';

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [
    {
      name: 'name',
      description: 'name of the enum',
      parse: pascalCaseName,
    },
  ];

  async run() {
    const { args } = this.parse(EnumCommand);

    let { name: enumName } = args;

    const availableEnums: string[] = this.store.get(ConfigKeys.Enums);

    const NAME_PROMPT_MSG = 'Please enter name of the enum';

    const responses = await this.inquirer.prompt([
      {
        name: 'enumName',
        type: 'input',
        message: NAME_PROMPT_MSG,
        validate: (value: string) => {
          if (!value) {
            return NAME_PROMPT_MSG;
          }

          const enumValue = pascalCaseName(value);

          if (listIncludes(availableEnums, enumValue)) {
            return `${chalk.red.bold(enumValue)} already exists. Please enter the name that does not exist`;
          }

          return true;
        },
        when: !args.name || listIncludes(availableEnums, args.name),
        filter: (input: string) =>
          listIncludes(availableEnums, pascalCaseName(input)) ? input : pascalCaseName(input),
      },
    ]);

    enumName = responses.enumName || enumName;

    const nameToCamelCase = camelCaseString(enumName);

    this.fs.copyTpl(this.templatePath('enum/_index.js'), this.sourceDestinationPath(`enums/${nameToCamelCase}.tsx`), {
      enumName,
    });

    this.store.set(ConfigKeys.Enums, [...this.store.get(ConfigKeys.Enums), enumName]);

    const enumsPath = this.sourceDestinationPath('enums/index.ts');

    // update enums/index.ts to add the new namespace to the list
    this.fs.copy(enumsPath, enumsPath, {
      process(content) {
        const regEx = new RegExp(/\/\* NEW_ENUM_EXPORT_GOES_HERE \*\//, 'g');
        const newContent = content
          .toString()
          .replace(regEx, `export { ${enumName} } from './${nameToCamelCase}';\n/* NEW_ENUM_EXPORT_GOES_HERE */`);
        return newContent;
      },
    });

    this.logAffectedFiles();
  }
}
