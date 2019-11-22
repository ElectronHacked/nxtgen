import { flags } from '@oclif/command';
import BaseCommand from '../../base';
import chalk = require('chalk');
const humanizeString = require('humanize-string');
const mkdirp = require('mkdirp');
import { listIncludes, pascalCase } from '../../tools';
import { ConfigKeys } from '../../enums';
import { IPageConfig, IRoute } from '../../models';
import decamelize = require('decamelize');
const fuzzy = require('fuzzy');
const _ = require('lodash');
import { ICON_NAMES } from '../../constants';

export default class PageCommand extends BaseCommand {
  static description = 'adds a new page';

  static flags = {
    help: flags.help({ char: 'h' }),
    nested: flags.boolean({ char: 'n', description: 'whether the page is nested' }),
    conceal: flags.boolean({ char: 'c', description: 'do not show a link to this page' }),
    title: flags.string({ char: 't', description: 'page title' }),
    icon: flags.string({ char: 'i', description: 'icon for this page' }),
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
    let { nested, conceal, icon = '', title = '' } = flags;

    const availablePages = this.store.get(ConfigKeys.Pages) as IPageConfig[];

    const pagePaths = availablePages.map(({ path }) => path);

    const NAME_PROMPT_MSG = 'Please enter name of the page';

    const shouldPromptForName = !name;
    const shouldPromptForNested = !name;
    const shouldPromptForConceal = !name;
    const shouldPromptForTitle = !title || !name;
    const shouldPromptForIcon = (icon && !listIncludes(ICON_NAMES, icon)) || !icon;

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
          when: shouldPromptForName,
        },
      ])
      .then(({ nameOfThePage }) => {
        pageName = nameOfThePage;

        return this.inquirer.prompt([
          {
            type: 'input',
            name: 'pageTitle',
            message: 'Page title',
            default: humanizeString(nameOfThePage),
            when: shouldPromptForTitle,
            validate: str => {
              if (str.trim().length > 0) {
                return true;
              }
              return 'Please add a name for your new page';
            },
          },
          {
            name: 'pageIcon',
            message: 'Select the page icon - https://ant.design/components/icon',
            type: 'autocomplete',
            source: this.searchIcons,
            when: shouldPromptForIcon,
          },
          {
            name: 'isHiddenPageLink',
            message: 'Hide the link to this page?',
            type: 'confirm',
            default: false,
            when: shouldPromptForConceal,
          },
          {
            name: 'isNestedPage',
            message: 'Is this a nested page?',
            type: 'confirm',
            default: false,
            when: shouldPromptForNested,
          },
          {
            when(response) {
              return response.isNestedPage && !!availablePages.length;
            },
            type: 'autocomplete',
            name: 'parentPage',
            message: 'Select the parent page',
            source: (_answers: any, input: string) => {
              input = input || '';
              return new Promise(function(resolve) {
                setTimeout(function() {
                  var fuzzyResult = fuzzy.filter(input, pagePaths);
                  resolve(
                    fuzzyResult.map(function(el: any) {
                      return el.original;
                    })
                  );
                }, _.random(30, 500));
              });
            },
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

    const { isNestedPage, parentPage, pageTitle, isHiddenPageLink, pageIcon } = responses;

    title = shouldPromptForTitle ? pageTitle : title;
    conceal = shouldPromptForConceal ? isHiddenPageLink : conceal;
    icon = shouldPromptForIcon ? pageIcon : icon;
    nested = shouldPromptForNested ? isNestedPage : nested;

    const isNested = args.name ? flags.nested : isNestedPage;

    const pagePath = isNested ? `${parentPage}/${pageName}` : pageName;

    const className = `${pageName}-page`;

    const componentName = pascalCase(orifinalPageName);

    const pagePageWithRoot = `pages/${pagePath}`;

    // // create folder project
    mkdirp(pagePageWithRoot);

    // copy page into the pages folder
    this.fs.copyTpl(this.templatePath('page/_index.js'), this.destinationPath(`${pagePageWithRoot}/index.tsx`), {
      componentName,
      title,
      className,
    });

    // copy styles.scss
    this.fs.copyTpl(this.templatePath('page/_styles.scss'), this.destinationPath(`${pagePageWithRoot}/styles.scss`), {
      className,
    });

    const pageRoute: IRoute = {
      name: pagePath,
      linkTo: `./${pagePath}`,
      hide: conceal,
      icon,
      displayName: title,
    };

    const routePath = this.sourcePath('routes/routes.json');

    // Now, update the route.json file with this page
    let routes: IRoute[] = this.fs.readJSON(routePath);

    if (nested) {
      this.injectNestedPage(routes, pageRoute, parentPage);
    } else {
      routes.push(pageRoute);
    }

    // Update the route.json file
    this.fs.writeJSON(routePath, routes);
  }

  searchIcons(_answers: any, input: string) {
    input = input || '';
    return new Promise(function(resolve) {
      setTimeout(function() {
        var fuzzyResult = fuzzy.filter(input, ICON_NAMES);
        resolve(
          fuzzyResult.map(function(el: any) {
            return el.original;
          })
        );
      }, _.random(30, 500));
    });
  }

  injectNestedPage(pages: IRoute[], childPage: IRoute, parent: string) {
    pages.forEach(page => {
      if (page.name === parent) {
        if (page.children) {
          page.children.push(childPage);
        }
      } else if (page.children) {
        this.injectNestedPage(pages, childPage, parent);
      }
    });
  }
}
