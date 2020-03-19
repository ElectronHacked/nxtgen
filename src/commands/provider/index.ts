import { flags } from '@oclif/command';
import BaseCommand from '../../base';
import { camelCaseString, pascalCaseName, dashifyString } from '../../tools';
import { ConfigKeys } from '../../enums';

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

    const PROVIDER_PATH = this.sourcePath('providers');

    providerName = camelCaseString(providerName) || responses.providerName;

    const stateName = pascalCaseName(providerName);
    const STATE_NAME_CAPS = dashifyString(providerName, '_').toUpperCase();

    // create folder project
    this.mkdirp(`${PROVIDER_PATH}/${providerName}`);

    // copy actions into the provider folder
    this.fs.copyTpl(
      this.templatePath('provider/_actions.js'),
      this.sourceDestinationPath(`${PROVIDER_PATH}/${providerName}/actions.ts`),
      {
        stateName,
      }
    );

    // copy context into the provider folder
    this.fs.copyTpl(
      this.templatePath('provider/_context.js'),
      this.sourceDestinationPath(`${PROVIDER_PATH}/${providerName}/_context.ts`),
      {
        stateName,
        stateNameCaps: STATE_NAME_CAPS,
      }
    );

    // copy reducer into the provider folder
    this.fs.copyTpl(
      this.templatePath('provider/_reducer.js'),
      this.sourceDestinationPath(`${PROVIDER_PATH}/${providerName}/_reducer.ts`),
      {
        stateName,
        stateNameCamelCase: providerName,
      }
    );

    // copy reducer into the provider folder
    this.fs.copyTpl(
      this.templatePath('provider/_index.js'),
      this.sourceDestinationPath(`${PROVIDER_PATH}/${providerName}/_index.tsx`),
      {
        stateName,
        stateNameCaps: STATE_NAME_CAPS,
        stateNameCamelCase: providerName,
      }
    );

    this.store.set(ConfigKeys.Providers, [...this.store.get(ConfigKeys.Providers), providerName]);
  }
}
