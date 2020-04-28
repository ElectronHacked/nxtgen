nextg
======

A CLI tool for generating NextJs applications

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/nextg.svg)](https://npmjs.org/package/nextg)
[![CircleCI](https://circleci.com/gh/ElectronHacked/nextg/tree/master.svg?style=shield)](https://circleci.com/gh/ElectronHacked/nextg/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/ElectronHacked/nextg?branch=master&svg=true)](https://ci.appveyor.com/project/ElectronHacked/nextg/branch/master)
[![Codecov](https://codecov.io/gh/ElectronHacked/nextg/branch/master/graph/badge.svg)](https://codecov.io/gh/ElectronHacked/nextg)
[![Downloads/week](https://img.shields.io/npm/dw/nextg.svg)](https://npmjs.org/package/nextg)
[![License](https://img.shields.io/npm/l/nextg.svg)](https://github.com/ElectronHacked/nextg/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @shesha/nextg
$ nextg COMMAND
running command...
$ nextg (-v|--version|version)
@shesha/nextg/1.0.1 win32-x64 node-v10.16.3
$ nextg --help [COMMAND]
USAGE
  $ nextg COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g @shesha/nextg
$ nextg COMMAND
running command...
$ nextg (-v|--version|version)
@shesha/nextg/1.0.0 win32-x64 node-v10.16.3
$ nextg --help [COMMAND]
USAGE
  $ nextg COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g @shesha/nextg
$ nextg COMMAND
running command...
$ nextg (-v|--version|version)
@shesha/nextg/1.0.0 win32-x64 node-v10.15.3
$ nextg --help [COMMAND]
USAGE
  $ nextg COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g @shesha/nextg
$ nextg COMMAND
running command...
$ nextg (-v|--version|version)
@shesha/nextg/1.0.0 win32-x64 node-v10.16.3
$ nextg --help [COMMAND]
USAGE
  $ nextg COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`nextg component [NAME]`](#nextg-component-name)
* [`nextg context [NAME]`](#nextg-context-name)
* [`nextg enum [NAME]`](#nextg-enum-name)
* [`nextg help [COMMAND]`](#nextg-help-command)
* [`nextg hoc [NAME]`](#nextg-hoc-name)
* [`nextg hook [NAME]`](#nextg-hook-name)
* [`nextg init [NAME]`](#nextg-init-name)
* [`nextg model [NAME]`](#nextg-model-name)
* [`nextg module [NAME]`](#nextg-module-name)
* [`nextg module:watch`](#nextg-modulewatch)
* [`nextg page [NAME]`](#nextg-page-name)
* [`nextg provider [NAME]`](#nextg-provider-name)
* [`nextg provider:action [PROVIDER] [NAME]`](#nextg-provideraction-provider-name)

## `nextg component [NAME]`

adds a new component

```
USAGE
  $ nextg component [NAME]

ARGUMENTS
  NAME  name of the component

OPTIONS
  -h, --help  show CLI help
```

## `nextg context [NAME]`

adds a new context

```
USAGE
  $ nextg context [NAME]

ARGUMENTS
  NAME  name of the context

OPTIONS
  -h, --help  show CLI help
```

## `nextg enum [NAME]`

adds a new enum

```
USAGE
  $ nextg enum [NAME]

ARGUMENTS
  NAME  name of the enum

OPTIONS
  -h, --help  show CLI help
```

## `nextg help [COMMAND]`

display help for nextg

```
USAGE
  $ nextg help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src\commands\help.ts)_

## `nextg hoc [NAME]`

adds a new Higher-Order Component

```
USAGE
  $ nextg hoc [NAME]

ARGUMENTS
  NAME  name of the higher-order component

OPTIONS
  -h, --help  show CLI help
```

## `nextg hook [NAME]`

adds a new hook

```
USAGE
  $ nextg hook [NAME]

ARGUMENTS
  NAME  name of the hook

OPTIONS
  -h, --help  show CLI help
```

## `nextg init [NAME]`

generates a new project

```
USAGE
  $ nextg init [NAME]

ARGUMENTS
  NAME  name of the project

OPTIONS
  -h, --help  show CLI help
```

## `nextg model [NAME]`

adds a new model/interface

```
USAGE
  $ nextg model [NAME]

ARGUMENTS
  NAME  name of the interface/model

OPTIONS
  -h, --help  show CLI help
```

## `nextg module [NAME]`

generates a new module hahaha

```
USAGE
  $ nextg module [NAME]

ARGUMENTS
  NAME  name of the module

OPTIONS
  -h, --help  show CLI help
```

## `nextg module:watch`

watches the modules directory and updates corresponding global pages directory

```
USAGE
  $ nextg module:watch
```

## `nextg page [NAME]`

adds a new page

```
USAGE
  $ nextg page [NAME]

ARGUMENTS
  NAME  name of the page

OPTIONS
  -c, --conceal      do not show a link to this page
  -h, --help         show CLI help
  -i, --icon=icon    icon for this page
  -t, --title=title  page title
```

## `nextg provider [NAME]`

adds a new provider

```
USAGE
  $ nextg provider [NAME]

ARGUMENTS
  NAME  name of the provider

OPTIONS
  -h, --help  show CLI help
```

## `nextg provider:action [PROVIDER] [NAME]`

adds a new action

```
USAGE
  $ nextg provider:action [PROVIDER] [NAME]

ARGUMENTS
  PROVIDER  name of the provider
  NAME      name of the action

OPTIONS
  -a, --actioned      whether the action should have an actioned flag
  -e, --error         whether the action should have an error flag
  -h, --help          show CLI help
  -p, --isInProgress  whether the action should have an in progress flag
  -s, --success       whether the action should have a success flag
```
<!-- commandsstop -->
* [`nextg component [NAME]`](#nextg-component-name)
* [`nextg context [NAME]`](#nextg-context-name)
* [`nextg enum [NAME]`](#nextg-enum-name)
* [`nextg help [COMMAND]`](#nextg-help-command)
* [`nextg hoc [NAME]`](#nextg-hoc-name)
* [`nextg hook [NAME]`](#nextg-hook-name)
* [`nextg init [NAME]`](#nextg-init-name)
* [`nextg model [NAME]`](#nextg-model-name)
* [`nextg module [NAME]`](#nextg-module-name)
* [`nextg module:watch`](#nextg-modulewatch)
* [`nextg page [NAME]`](#nextg-page-name)
* [`nextg provider [NAME]`](#nextg-provider-name)
* [`nextg provider:action [PROVIDER] [NAME]`](#nextg-provideraction-provider-name)

## `nextg component [NAME]`

adds a new component

```
USAGE
  $ nextg component [NAME]

ARGUMENTS
  NAME  name of the component

OPTIONS
  -h, --help  show CLI help
```

## `nextg context [NAME]`

adds a new context

```
USAGE
  $ nextg context [NAME]

ARGUMENTS
  NAME  name of the context

OPTIONS
  -h, --help  show CLI help
```

## `nextg enum [NAME]`

adds a new enum

```
USAGE
  $ nextg enum [NAME]

ARGUMENTS
  NAME  name of the enum

OPTIONS
  -h, --help  show CLI help
```

## `nextg help [COMMAND]`

display help for nextg

```
USAGE
  $ nextg help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src\commands\help.ts)_

## `nextg hoc [NAME]`

adds a new Higher-Order Component

```
USAGE
  $ nextg hoc [NAME]

ARGUMENTS
  NAME  name of the higher-order component

OPTIONS
  -h, --help  show CLI help
```

## `nextg hook [NAME]`

adds a new hook

```
USAGE
  $ nextg hook [NAME]

ARGUMENTS
  NAME  name of the hook

OPTIONS
  -h, --help  show CLI help
```

## `nextg init [NAME]`

generates a new project

```
USAGE
  $ nextg init [NAME]

ARGUMENTS
  NAME  name of the project

OPTIONS
  -h, --help  show CLI help
```

## `nextg model [NAME]`

adds a new model/interface

```
USAGE
  $ nextg model [NAME]

ARGUMENTS
  NAME  name of the interface/model

OPTIONS
  -h, --help  show CLI help
```

## `nextg module [NAME]`

generates a new module hahaha

```
USAGE
  $ nextg module [NAME]

ARGUMENTS
  NAME  name of the module

OPTIONS
  -h, --help  show CLI help
```

## `nextg module:watch`

watches the modules directory and updates corresponding global pages directory

```
USAGE
  $ nextg module:watch
```

## `nextg page [NAME]`

adds a new page

```
USAGE
  $ nextg page [NAME]

ARGUMENTS
  NAME  name of the page

OPTIONS
  -c, --conceal      do not show a link to this page
  -h, --help         show CLI help
  -i, --icon=icon    icon for this page
  -t, --title=title  page title
```

## `nextg provider [NAME]`

adds a new provider

```
USAGE
  $ nextg provider [NAME]

ARGUMENTS
  NAME  name of the provider

OPTIONS
  -h, --help  show CLI help
```

## `nextg provider:action [PROVIDER] [NAME]`

adds a new action

```
USAGE
  $ nextg provider:action [PROVIDER] [NAME]

ARGUMENTS
  PROVIDER  name of the provider
  NAME      name of the action

OPTIONS
  -a, --actioned      whether the action should have an actioned flag
  -e, --error         whether the action should have an error flag
  -h, --help          show CLI help
  -p, --isInProgress  whether the action should have an in progress flag
  -s, --success       whether the action should have a success flag
```
<!-- commandsstop -->
* [`nextg component [NAME]`](#nextg-component-name)
* [`nextg context [NAME]`](#nextg-context-name)
* [`nextg enum [NAME]`](#nextg-enum-name)
* [`nextg help [COMMAND]`](#nextg-help-command)
* [`nextg hoc [NAME]`](#nextg-hoc-name)
* [`nextg hook [NAME]`](#nextg-hook-name)
* [`nextg init [NAME]`](#nextg-init-name)
* [`nextg model [NAME]`](#nextg-model-name)
* [`nextg page [NAME]`](#nextg-page-name)
* [`nextg provider [NAME]`](#nextg-provider-name)
* [`nextg provider:action [PROVIDER] [NAME]`](#nextg-provideraction-provider-name)

## `nextg component [NAME]`

adds a new component

```
USAGE
  $ nextg component [NAME]

ARGUMENTS
  NAME  name of the component

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\component\index.ts](https://github.com/ElectronHacked/nextg/blob/v1.0.0/src\commands\component\index.ts)_

## `nextg context [NAME]`

adds a new context

```
USAGE
  $ nextg context [NAME]

ARGUMENTS
  NAME  name of the context

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\context\index.ts](https://github.com/ElectronHacked/nextg/blob/v1.0.0/src\commands\context\index.ts)_

## `nextg enum [NAME]`

adds a new enum

```
USAGE
  $ nextg enum [NAME]

ARGUMENTS
  NAME  name of the enum

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\enum\index.ts](https://github.com/ElectronHacked/nextg/blob/v1.0.0/src\commands\enum\index.ts)_

## `nextg help [COMMAND]`

display help for nextg

```
USAGE
  $ nextg help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src\commands\help.ts)_

## `nextg hoc [NAME]`

adds a new Higher-Order Component

```
USAGE
  $ nextg hoc [NAME]

ARGUMENTS
  NAME  name of the higher-order component

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\hoc\index.ts](https://github.com/ElectronHacked/nextg/blob/v1.0.0/src\commands\hoc\index.ts)_

## `nextg hook [NAME]`

adds a new hook

```
USAGE
  $ nextg hook [NAME]

ARGUMENTS
  NAME  name of the hook

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\hook\index.ts](https://github.com/ElectronHacked/nextg/blob/v1.0.0/src\commands\hook\index.ts)_

## `nextg init [NAME]`

generates a new project hahaha

```
USAGE
  $ nextg init [NAME]

ARGUMENTS
  NAME  name of the project

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\init\index.ts](https://github.com/ElectronHacked/nextg/blob/v1.0.0/src\commands\init\index.ts)_

## `nextg model [NAME]`

adds a new model/interface

```
USAGE
  $ nextg model [NAME]

ARGUMENTS
  NAME  name of the interface/model

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\model\index.ts](https://github.com/ElectronHacked/nextg/blob/v1.0.0/src\commands\model\index.ts)_

## `nextg page [NAME]`

adds a new page

```
USAGE
  $ nextg page [NAME]

ARGUMENTS
  NAME  name of the page

OPTIONS
  -c, --conceal      do not show a link to this page
  -h, --help         show CLI help
  -i, --icon=icon    icon for this page
  -t, --title=title  page title
```

_See code: [src\commands\page\index.ts](https://github.com/ElectronHacked/nextg/blob/v1.0.0/src\commands\page\index.ts)_

## `nextg provider [NAME]`

adds a new provider

```
USAGE
  $ nextg provider [NAME]

ARGUMENTS
  NAME  name of the provider

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\provider\index.ts](https://github.com/ElectronHacked/nextg/blob/v1.0.0/src\commands\provider\index.ts)_

## `nextg provider:action [PROVIDER] [NAME]`

adds a new action

```
USAGE
  $ nextg provider:action [PROVIDER] [NAME]

ARGUMENTS
  PROVIDER  name of the provider
  NAME      name of the action

OPTIONS
  -a, --actioned      whether the action should have an actioned flag
  -e, --error         whether the action should have an error flag
  -h, --help          show CLI help
  -p, --isInProgress  whether the action should have an in progress flag
  -s, --success       whether the action should have a success flag
```

_See code: [src\commands\provider\action.ts](https://github.com/ElectronHacked/nextg/blob/v1.0.0/src\commands\provider\action.ts)_
<!-- commandsstop -->
* [`nextg action NAME`](#nextg-action-name)
* [`nextg api [FILE]`](#nextg-api-file)
* [`nextg authentication [FILE]`](#nextg-authentication-file)
* [`nextg component [FILE]`](#nextg-component-file)
* [`nextg context NAME`](#nextg-context-name)
* [`nextg help [COMMAND]`](#nextg-help-command)
* [`nextg hoc NAME`](#nextg-hoc-name)
* [`nextg hook NAME`](#nextg-hook-name)
* [`nextg init [NAME]`](#nextg-init-name)
* [`nextg page [FILE]`](#nextg-page-file)
* [`nextg store NAME`](#nextg-store-name)
* [`nextg swag NAME`](#nextg-swag-name)

## `nextg action NAME`

adds a new redux store to the project

```
USAGE
  $ nextg action NAME

ARGUMENTS
  NAME  name of the store

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\action.ts](https://github.com/ElectronHacked/nextg/blob/v1.0.0/src\commands\action.ts)_

## `nextg api [FILE]`

adds an API to the project

```
USAGE
  $ nextg api [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name of the project
```

_See code: [src\commands\api.ts](https://github.com/ElectronHacked/nextg/blob/v1.0.0/src\commands\api.ts)_

## `nextg authentication [FILE]`

adds authentication to the project

```
USAGE
  $ nextg authentication [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name of the project
```

_See code: [src\commands\authentication.ts](https://github.com/ElectronHacked/nextg/blob/v1.0.0/src\commands\authentication.ts)_

## `nextg component [FILE]`

creates a new component

```
USAGE
  $ nextg component [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name of the project
```

_See code: [src\commands\component.ts](https://github.com/ElectronHacked/nextg/blob/v1.0.0/src\commands\component.ts)_

## `nextg context NAME`

adds a new context

```
USAGE
  $ nextg context NAME

ARGUMENTS
  NAME  name of the context

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\context.ts](https://github.com/ElectronHacked/nextg/blob/v1.0.0/src\commands\context.ts)_

## `nextg help [COMMAND]`

display help for nextg

```
USAGE
  $ nextg help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src\commands\help.ts)_

## `nextg hoc NAME`

adds a new Higher-Order Component

```
USAGE
  $ nextg hoc NAME

ARGUMENTS
  NAME  name of the higher-order component

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\hoc.ts](https://github.com/ElectronHacked/nextg/blob/v1.0.0/src\commands\hoc.ts)_

## `nextg hook NAME`

adds a new hook

```
USAGE
  $ nextg hook NAME

ARGUMENTS
  NAME  name of the hook

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\hook.ts](https://github.com/ElectronHacked/nextg/blob/v1.0.0/src\commands\hook.ts)_

## `nextg init [NAME]`

generates a new project

```
USAGE
  $ nextg init [NAME]

ARGUMENTS
  NAME  name of the project

OPTIONS
  -a, --authentication   include authentication

  -f, --force            does not ask the user to confirm if they do not want any of authentication, googleAnalytics or
                         insights

  -g, --googleAnalytics  include Google Analytics

  -h, --help             show CLI help

  -i, --insights         include Application Insights
```

_See code: [src\commands\init.ts](https://github.com/ElectronHacked/nextg/blob/v1.0.0/src\commands\init.ts)_

## `nextg page [FILE]`

adds a new page

```
USAGE
  $ nextg page [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name of the project
```

_See code: [src\commands\page.ts](https://github.com/ElectronHacked/nextg/blob/v1.0.0/src\commands\page.ts)_

## `nextg store NAME`

adds a new redux store to the project

```
USAGE
  $ nextg store NAME

ARGUMENTS
  NAME  name of the store

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\store.ts](https://github.com/ElectronHacked/nextg/blob/v1.0.0/src\commands\store.ts)_

## `nextg swag NAME`

adds/updates a swagger file and regenerates the APIs

```
USAGE
  $ nextg swag NAME

ARGUMENTS
  NAME  name of the destination file

OPTIONS
  -h, --help               show CLI help
  -p, --password=password  password of the server that hosts the swagger file
  -u, --username=username  username of the server that hosts the swagger file
```

_See code: [src\commands\swag.ts](https://github.com/ElectronHacked/nextg/blob/v1.0.0/src\commands\swag.ts)_
<!-- commandsstop -->
