import { flags } from '@oclif/command';
import BaseCommand from '../../base';
import chalk = require('chalk');
const humanizeString = require('humanize-string');
const mkdirp = require('mkdirp');
import { ensureItEndsWith, listIncludes, pascalCase } from '../../tools';
import { ConfigKeys } from '../../enums';
import { IPageConfig } from '../../models';
import decamelize = require('decamelize');

export default class PageCommand extends BaseCommand {
  static description = 'adds a new page';

  static flags = {
    help: flags.help({ char: 'h' }),
    nested: flags.boolean({ char: 'n', description: 'whether the page is nested' }),
    title: flags.string({ char: 't', description: 'page title' }),
  };

  static args = [
    {
      name: 'name',
      description: 'name of the page',
    },
  ];

  async run() {
    const { args, flags } = this.parse(PageCommand);

    let { name: pageName } = args;

    const availablePages = this.store.get(ConfigKeys.Pages) as IPageConfig[];

    const pagePaths = availablePages.map(({ path }) => path);

    const NAME_PROMPT_MSG = 'Please enter name of the page';

    const responses = await this.inquirer
      .prompt([
        {
          name: 'nameOfThePage',
          type: 'input',
          message: NAME_PROMPT_MSG,
          validate: (value: string) => {
            if (!value) {
              return NAME_PROMPT_MSG;
            }

            return true;
          },
          when: !pageName,
        },
      ])
      .then(({ nameOfThePage }) => {
        pageName = nameOfThePage;

        return this.inquirer.prompt([
          {
            type: 'input',
            name: 'title',
            message: 'Page title',
            default: humanizeString(nameOfThePage),
            validate: str => {
              if (str.trim().length > 0) {
                return true;
              }
              return 'Please add a name for your new page';
            },
          },
          {
            name: 'isNestedPage',
            message: 'Is this a nested page?',
            type: 'confirm',
            default: false,
          },
          {
            when(response) {
              return response.isNestedPage && !!availablePages.length;
            },
            type: 'list',
            name: 'parentPage',
            message: 'Select the parent page',
            choices: pagePaths,
          },
        ]);
      });

    if (responses.isNestedPage && !availablePages.length) {
      this.log(
        `Found ${chalk.red.bold(
          0
        )} pages. This page can't be nested as a result. Please make sure that you have pages added or that your ${chalk.magenta.bold.italic(
          'config'
        )} file is valid`
      );
    }

    const orifinalPageName = pageName;
    
    pageName = decamelize(pageName);

    const { isNestedPage, parentPage, title } = responses;

    const isNested = args.name ? flags.nested : isNestedPage;

    const pagePath = isNested? `${parentPage}/${pageName}` : pageName;

    const className = `${pageName}-page`;

    const componentName = pascalCase(orifinalPageName);

    const pagePageWithRoot = `pages/${pagePath}`;

    // create folder project
    mkdirp(pagePageWithRoot);

    // copy page into the pages folder
    this.fs.copyTpl(this.templatePath('page/_index.js'), this.destinationPath(`${pagePageWithRoot}/index.tsx`), {
      componentName,
      title,
      className
    });


    // copy styles.scss
    this.fs.copyTpl(this.templatePath('page/_styles.scss'), this.destinationPath(`${pagePageWithRoot}/styles.scss`), {
      className,
    });

    // Update the config file with the new page
  }
}
