nxtgen
======

A CLI tool for generating NextJs applications

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/nxtgen.svg)](https://npmjs.org/package/nxtgen)
[![CircleCI](https://circleci.com/gh/ElectronHacked/nxtgen/tree/master.svg?style=shield)](https://circleci.com/gh/ElectronHacked/nxtgen/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/ElectronHacked/nxtgen?branch=master&svg=true)](https://ci.appveyor.com/project/ElectronHacked/nxtgen/branch/master)
[![Codecov](https://codecov.io/gh/ElectronHacked/nxtgen/branch/master/graph/badge.svg)](https://codecov.io/gh/ElectronHacked/nxtgen)
[![Downloads/week](https://img.shields.io/npm/dw/nxtgen.svg)](https://npmjs.org/package/nxtgen)
[![License](https://img.shields.io/npm/l/nxtgen.svg)](https://github.com/ElectronHacked/nxtgen/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @shesha/nextgen
$ nxtgen COMMAND
running command...
$ nxtgen (-v|--version|version)
@shesha/nextgen/1.0.0 win32-x64 node-v10.16.3
$ nxtgen --help [COMMAND]
USAGE
  $ nxtgen COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`nxtgen action NAME`](#nxtgen-action-name)
* [`nxtgen api [FILE]`](#nxtgen-api-file)
* [`nxtgen authentication [FILE]`](#nxtgen-authentication-file)
* [`nxtgen component [FILE]`](#nxtgen-component-file)
* [`nxtgen context NAME`](#nxtgen-context-name)
* [`nxtgen help [COMMAND]`](#nxtgen-help-command)
* [`nxtgen hoc NAME`](#nxtgen-hoc-name)
* [`nxtgen hook NAME`](#nxtgen-hook-name)
* [`nxtgen init [NAME]`](#nxtgen-init-name)
* [`nxtgen page [FILE]`](#nxtgen-page-file)
* [`nxtgen store NAME`](#nxtgen-store-name)
* [`nxtgen swag NAME`](#nxtgen-swag-name)

## `nxtgen action NAME`

adds a new redux store to the project

```
USAGE
  $ nxtgen action NAME

ARGUMENTS
  NAME  name of the store

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\action.ts](https://github.com/ElectronHacked/nxtgen/blob/v1.0.0/src\commands\action.ts)_

## `nxtgen api [FILE]`

adds an API to the project

```
USAGE
  $ nxtgen api [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name of the project
```

_See code: [src\commands\api.ts](https://github.com/ElectronHacked/nxtgen/blob/v1.0.0/src\commands\api.ts)_

## `nxtgen authentication [FILE]`

adds authentication to the project

```
USAGE
  $ nxtgen authentication [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name of the project
```

_See code: [src\commands\authentication.ts](https://github.com/ElectronHacked/nxtgen/blob/v1.0.0/src\commands\authentication.ts)_

## `nxtgen component [FILE]`

creates a new component

```
USAGE
  $ nxtgen component [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name of the project
```

_See code: [src\commands\component.ts](https://github.com/ElectronHacked/nxtgen/blob/v1.0.0/src\commands\component.ts)_

## `nxtgen context NAME`

adds a new context

```
USAGE
  $ nxtgen context NAME

ARGUMENTS
  NAME  name of the context

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\context.ts](https://github.com/ElectronHacked/nxtgen/blob/v1.0.0/src\commands\context.ts)_

## `nxtgen help [COMMAND]`

display help for nxtgen

```
USAGE
  $ nxtgen help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src\commands\help.ts)_

## `nxtgen hoc NAME`

adds a new Higher-Order Component

```
USAGE
  $ nxtgen hoc NAME

ARGUMENTS
  NAME  name of the higher-order component

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\hoc.ts](https://github.com/ElectronHacked/nxtgen/blob/v1.0.0/src\commands\hoc.ts)_

## `nxtgen hook NAME`

adds a new hook

```
USAGE
  $ nxtgen hook NAME

ARGUMENTS
  NAME  name of the hook

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\hook.ts](https://github.com/ElectronHacked/nxtgen/blob/v1.0.0/src\commands\hook.ts)_

## `nxtgen init [NAME]`

generates a new project

```
USAGE
  $ nxtgen init [NAME]

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

_See code: [src\commands\init.ts](https://github.com/ElectronHacked/nxtgen/blob/v1.0.0/src\commands\init.ts)_

## `nxtgen page [FILE]`

adds a new page

```
USAGE
  $ nxtgen page [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name of the project
```

_See code: [src\commands\page.ts](https://github.com/ElectronHacked/nxtgen/blob/v1.0.0/src\commands\page.ts)_

## `nxtgen store NAME`

adds a new redux store to the project

```
USAGE
  $ nxtgen store NAME

ARGUMENTS
  NAME  name of the store

OPTIONS
  -h, --help  show CLI help
```

_See code: [src\commands\store.ts](https://github.com/ElectronHacked/nxtgen/blob/v1.0.0/src\commands\store.ts)_

## `nxtgen swag NAME`

adds/updates a swagger file and regenerates the APIs

```
USAGE
  $ nxtgen swag NAME

ARGUMENTS
  NAME  name of the destination file

OPTIONS
  -h, --help               show CLI help
  -p, --password=password  password of the server that hosts the swagger file
  -u, --username=username  username of the server that hosts the swagger file
```

_See code: [src\commands\swag.ts](https://github.com/ElectronHacked/nxtgen/blob/v1.0.0/src\commands\swag.ts)_
<!-- commandsstop -->
