import { flags } from '@oclif/command';
import BaseCommand from '../../base';
import mkdirp = require('mkdirp');
const humanizeString = require('humanize-string');
import { listIncludes, pascalCaseName, hiphenizeString, dashifyString } from '../../tools';
import { IRoute } from '../../models';
const fuzzy = require('fuzzy');
import _ = require('lodash');
import { ICON_NAMES } from '../../constants';

export default class PageCommand extends BaseCommand {
  static description = 'adds a new page';

  static flags = {
    help: flags.help({ char: 'h' }),
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
    let { conceal, icon = '', title = '' } = flags;

    const NAME_PROMPT_MSG = 'Please enter name of the page';

    const shouldPromptForName = !pageName;
    const shouldPromptForConceal = !pageName;
    const shouldPromptForTitle = !title || !pageName;
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
        pageName = pageName || nameOfThePage;

        return this.inquirer.prompt([
          {
            type: 'input',
            name: 'pageTitle',
            message: 'Page title',
            default: humanizeString(pageName),
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
            message: 'Select the page icon - https://3x.ant.design/components/icon/',
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
            type: 'fuzzypath',
            itemType: 'directory',
            name: 'pageStorage',
            message: 'Select a target directory for your page',
            rootPath: this.sourceDestinationPath('pages'),
            suggestOnly: false,
          },
        ]);
      });

    const originalPageName = pageName;

    pageName = hiphenizeString(pageName);

    const { pageStorage, pageTitle, isHiddenPageLink, pageIcon } = responses;

    title = shouldPromptForTitle ? pageTitle : title;
    conceal = shouldPromptForConceal ? isHiddenPageLink : conceal;
    icon = shouldPromptForIcon ? pageIcon : icon;

    const className = `${pageName}-page`;

    const relativePath = `${pageStorage}/${originalPageName}`.split('pages')[1].replace(/\\/g, '/');

    mkdirp(`${this.sourceDestinationPath('components/pages')}/${relativePath}`);

    const componentName = pascalCaseName(originalPageName);

    // copy page into the pages folder
    this.fs.copyTpl(this.templatePath('page/_index.js'), `${pageStorage}/${pageName}/index.tsx`, {
      componentName,
      title,
      className,
    });

    // // copy styles.scss
    this.fs.copyTpl(this.templatePath('page/_styles.scss'), `${pageStorage}/${pageName}/styles.scss`, {
      className,
    });

    const PAGE_URL_NAME = `${dashifyString(pageName, '_')}_URL`.toUpperCase();

    const PAGE_URL_EXPORT_DECLARATION = `export const ${PAGE_URL_NAME} = '${relativePath}';\n`;

    const PAGE_ROUTE_OBJECT = `{
      name: ${PAGE_URL_NAME},
      linkTo: ${PAGE_URL_NAME},
      hide: ${conceal},
      icon: '${icon}',
      displayName: '${title}',
      permissionName: '',
    },`;

    const ROUTES_FILE_PATH = this.sourceDestinationPath('routes/index.ts');

    this.replaceContent(ROUTES_FILE_PATH, PAGE_URL_EXPORT_DECLARATION, 'NEW_PAGE_DECLARATION_GOES_HERE');

    this.replaceContent(ROUTES_FILE_PATH, PAGE_ROUTE_OBJECT, 'NEW_PAGE_LINK_GOES_HERE');

    this.logAffectedFiles();
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
        } else {
          page.children = [childPage];
        }
      } else if (page.children) {
        this.injectNestedPage(page.children, childPage, parent);
      }
    });
  }
}
