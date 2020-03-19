import { flags } from '@oclif/command';
import BaseCommand from '../../base';
const fuzzy = require('fuzzy');
import _ = require('lodash');

const ACTION_FLAGS = ['success', 'error', 'inProgress', 'actioned'];

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

    let { name: actionName } = args;
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

    success = success || responses.actionFlags.includes('success');
    error = error || responses.actionFlags.includes('error');
    inProgress = inProgress || responses.actionFlags.includes('inProgress');
    actioned = actioned || responses.actionFlags.includes('actioned');

    if (success || error || inProgress || actioned) {
      if (success) {
      }
      if (success) {
      }
      if (success) {
      }
      if (success) {
      }
      if (success) {
      }
    }
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
