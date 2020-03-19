import { flags } from '@oclif/command';
import BaseCommand from '../../base';
const fuzzy = require('fuzzy');
import _ = require('lodash');
import { newLineString, dashifyString, camelCaseString, pascalCaseName } from '../../tools';

interface IActionTemplates {
  contextDeclarations: string;
  enumDeclarations: string;
  actionCreatorsDeclarations: string;
  actionReducerSwitches: string;
  actionIndexImports: string;
  actionIndexMethodDeclarations: string;
  actionIndexMethodExports: string;
}

const ACTION_FLAGS = ['success', 'error', 'inProgress', 'actioned'];

type ActionFlagType = 'success' | 'error' | 'isInProgress' | 'actioned' | '';

export default class PageCommand extends BaseCommand {
  static description = 'adds a new action';

  static flags = {
    help: flags.help({ char: 'h' }),
    success: flags.boolean({ char: 's', description: 'whether the action should have a success flag' }),
    error: flags.boolean({ char: 'e', description: 'whether the action should have an error flag' }),
    inProgress: flags.boolean({ char: 'p', description: 'whether the action should have an in progress flag' }),
    actioned: flags.boolean({ char: 'a', description: 'whether the action should have an actioned flag' }),
  };

  static args = [
    {
      name: 'name',
      description: 'name of the action',
    },
    {
      name: 'provider',
      description: 'name of the provider',
    },
  ];

  async run() {
    const { args, flags } = this.parse(PageCommand);

    let { name: actionName, provider } = args;
    let { success, error, inProgress, actioned } = flags;

    const hasNoFlag = !(success || error || inProgress || actioned);

    const NAME_PROMPT_MSG = 'Please enter name of the action';

    const shouldPromptForName = !actionName;

    const responses = await this.inquirer
      .prompt([
        {
          name: 'nameOfTheAction',
          type: 'input',
          message: NAME_PROMPT_MSG,
          validate: (value: string) => {
            if (!value) {
              return NAME_PROMPT_MSG;
            }

            return true;
          },
          when: shouldPromptForName,
        },
        {
          name: 'shouldHaveFlags',
          type: 'confirm',
          message: 'Should this action have flags (isInProgress, error, success, actioned)?',
          default: false,
          when: hasNoFlag,
        },
      ])
      .then(({ shouldHaveFlags, nameOfTheAction }) => {
        actionName = actionName || nameOfTheAction;

        return this.inquirer.prompt([
          {
            name: 'actionFlags',
            type: 'checkbox-plus',
            message: 'Please select the flags below',
            highlight: true,
            source: this.searchProviders,
            when: shouldHaveFlags,
          },
        ]);
      });

    actionName = camelCaseString(actionName);

    const actionNamePascal = pascalCaseName(actionName);
    const actionNameUnderscore = dashifyString(actionName).toUpperCase();

    success = success || responses.actionFlags.includes('success');
    error = error || responses.actionFlags.includes('error');
    inProgress = inProgress || responses.actionFlags.includes('inProgress');
    actioned = actioned || responses.actionFlags.includes('actioned');

    const stateName = pascalCaseName(provider);

    const enumName = `${stateName}ActionEnums`;

    let ACTION_CONTEXT_DECLARATIONS = '';
    let ACTION_ENUM_DECLARATIONS = '';
    let ACTION_CREATORS_DECLARATIONS = '';
    let ACTIONS_REDUCER_SWITCHES = '';
    let ACTIONS_INDEX_IMPORTS = '';
    let ACTIONS_INDEX_METHODS_DECLARATIONS = '';
    let ACTIONS_INDEX_METHODS_EXPORTS = '';

    const updateActionTemplates = (flag: ActionFlagType) => {
      const actionTemplates = this.getActionTemplates(
        actionName,
        actionNamePascal,
        actionNameUnderscore,
        enumName,
        stateName,
        flag
      );

      ACTION_CONTEXT_DECLARATIONS += actionTemplates.actionCreatorsDeclarations;
      ACTION_ENUM_DECLARATIONS += actionTemplates.enumDeclarations;
      ACTION_CREATORS_DECLARATIONS += actionTemplates.actionCreatorsDeclarations;
      ACTIONS_REDUCER_SWITCHES += actionTemplates.actionReducerSwitches;
      ACTIONS_INDEX_IMPORTS += actionTemplates.actionIndexImports;
      ACTIONS_INDEX_METHODS_DECLARATIONS += actionTemplates.actionIndexMethodDeclarations;
      ACTIONS_INDEX_METHODS_EXPORTS += actionTemplates.actionIndexMethodExports;
    };

    const actionsPath = this.sourceDestinationPath('providers/actions.ts');
    const contextPath = this.sourceDestinationPath('providers/contexts.ts');
    const indexPath = this.sourceDestinationPath('providers/index.ts');
    const reducerPath = this.sourceDestinationPath('providers/reducer.ts');

    if (success || error || inProgress || actioned) {
      if (success) {
        updateActionTemplates('success');

        // IFlagSucceededFlags
        this.replaceContent(contextPath, `${newLineString(actionName)}`, 'NEW_SUCCEEDED_FLAG_GOES_HERE');
      }

      if (error) {
        updateActionTemplates('error');

        // IFlagErrorFlags
        this.replaceContent(contextPath, `${newLineString(actionName)}`, 'NEW_ERROR_FLAG_GOES_HERE');
      }

      if (inProgress) {
        updateActionTemplates('isInProgress');

        // IFlagProgressFlags
        this.replaceContent(contextPath, `${newLineString(actionName)}`, 'NEW_IN_PROGRESS_FLAG_GOES_HERE');
      }

      if (actioned) {
        updateActionTemplates('actioned');

        // IFlagActionedFlags
        this.replaceContent(contextPath, `${newLineString(actionName)}`, 'NEW_ACTIONED_FLAG_GOES_HERE');
      }
    } else {
      updateActionTemplates('');
    }

    // providers/contexts.ts
    this.replaceContent(contextPath, ACTION_CONTEXT_DECLARATIONS, 'NEW_ACTION_ACTION_DECLARATIO_GOES_HERE');

    // providers/actions.ts
    this.replaceContent(actionsPath, ACTION_ENUM_DECLARATIONS, 'NEW_ACTION_TYPE_GOES_HERE');
    this.replaceContent(actionsPath, ACTION_CREATORS_DECLARATIONS, 'NEW_ACTION_GOES_HERE');

    // providers/reducer.ts
    this.replaceContent(reducerPath, ACTIONS_REDUCER_SWITCHES, 'NEW_ACTION_ENUM_GOES_HERE');

    // providers/index.ts
    this.replaceContent(indexPath, ACTIONS_INDEX_IMPORTS, 'NEW_IMPORT_GOES_HERE');
    this.replaceContent(indexPath, ACTIONS_INDEX_METHODS_DECLARATIONS, 'NEW_ACTION_DECLARATION_GOES_HERE');
    this.replaceContent(indexPath, ACTIONS_INDEX_METHODS_EXPORTS, 'NEW_ACTION_GOES_HERE');
  }

  getActionTemplates(
    actionName: string,
    actionNamePascal: string,
    actionNameUnderscore: string,
    enumName: string,
    stateName: string,
    flag: ActionFlagType
  ): IActionTemplates {
    const enumValue = `${actionNamePascal}Success`;
    const flagPascalCase = pascalCaseName(flag);
    const flagToUpperWithUnderScorePrefix = flag.length ? `_${flag}`.toLowerCase() : '';

    return {
      contextDeclarations: newLineString(`${actionName}Success: () => void;`),
      enumDeclarations: newLineString(`${enumValue} = '${actionNameUnderscore}${flagToUpperWithUnderScorePrefix}',`),
      actionCreatorsDeclarations: newLineString(`
      export const ${actionName}${flagPascalCase}Action = createAction<I${stateName}StateContext>(${enumName}.${enumValue}, () => ({}));`),
      actionReducerSwitches: newLineString(`case ${enumName}.${enumValue}:`),
      actionIndexImports: newLineString(`${actionName}${flagPascalCase}Action,`),
      actionIndexMethodDeclarations: newLineString(
        `const ${actionName}${flagPascalCase} = () => { dispatch(${actionName}${flagPascalCase}Action()); };`
      ),
      actionIndexMethodExports: newLineString(`${actionName}${flagPascalCase},`),
    };
  }

  searchProviders(_answers: any, input: string) {
    input = input || '';
    return new Promise(function(resolve) {
      setTimeout(function() {
        var fuzzyResult = fuzzy.filter(input, ACTION_FLAGS);
        resolve(
          fuzzyResult.map(function(el: any) {
            return el.original;
          })
        );
      }, _.random(10, 100));
    });
  }
}
