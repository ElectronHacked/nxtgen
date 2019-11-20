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
# Usage
<!-- usage -->
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
