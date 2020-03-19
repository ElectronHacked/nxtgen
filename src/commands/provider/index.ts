import { flags } from '@oclif/command';
import BaseCommand from '../../base';
import { camelCaseString, pascalCaseName, dashifyString } from '../../tools';
import { ConfigKeys } from '../../enums';
import { IConfigStore } from '../../models/configSchema';

export default class ProviderCommand extends BaseCommand {
  static description = 'adds a new provider';

  static flags = {
    help: flags.help({ char: 'h' }),
  };

  static args = [
    {
      name: 'name',
      description: 'name of the provider',
      parse: camelCaseString,
    },
  ];

  async run() {
    let { args } = this.parse(ProviderCommand);

    let { name: providerName } = args;

    const NAME_PROMPT_MSG = 'Please enter name of the new provider';

    const responses = await this.inquirer.prompt([
      {
        name: 'providerName',
        type: 'input',
        message: NAME_PROMPT_MSG,
        validate: (value: string) => {
          if (!value) {
            return NAME_PROMPT_MSG;
          }

          return true;
        },
        when: !providerName,
        filter: (input: string) => camelCaseString(input),
      },
    ]);

    providerName = providerName ? camelCaseString(providerName) : responses.providerName;

    const stateName = pascalCaseName(providerName);
    const STATE_NAME_CAPS = dashifyString(providerName, '_').toUpperCase();

    const PROVIDER_PATH = this.sourcePath('providers');

    // copy actions into the provider folder
    this.fs.copyTpl(this.templatePath('provider/_actions.js'), `${PROVIDER_PATH}/${providerName}/actions.ts`, {
      stateName,
    });

    // copy context into the provider folder
    this.fs.copyTpl(this.templatePath('provider/_contexts.js'), `${PROVIDER_PATH}/${providerName}/contexts.ts`, {
      stateName,
      stateNameCaps: STATE_NAME_CAPS,
    });

    // copy reducer into the provider folder
    this.fs.copyTpl(this.templatePath('provider/_reducer.js'), `${PROVIDER_PATH}/${providerName}/reducer.ts`, {
      stateName,
      stateNameCamelCase: providerName,
    });

    // copy reducer into the provider folder
    this.fs.copyTpl(this.templatePath('provider/_index.js'), `${PROVIDER_PATH}/${providerName}/index.tsx`, {
      stateName,
      stateNameCaps: STATE_NAME_CAPS,
      stateNameCamelCase: providerName,
    });

    const providersIndexPath = this.sourceDestinationPath('providers/index.ts');

    // update contexts/index.ts to add the new namespace to the list
    this.fs.copy(providersIndexPath, providersIndexPath, {
      process(content) {
        const regEx = new RegExp(/\/\* NEW_PROVIDER_EXPORT_GOES_HERE \*\//, 'g');
        const newContent = content
          .toString()
          .replace(regEx, `export * from './${providerName}';\n/* NEW_PROVIDER_EXPORT_GOES_HERE */\n`);
        return newContent;
      },
    });

    const providerConfig: IConfigStore = {
      name: providerName,
      actions: [],
    };

    this.store.set(ConfigKeys.Providers, [...this.store.get(ConfigKeys.Providers), providerConfig]);
  }
}
