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
$ npm install -g nxtgen
$ nxtgen COMMAND
running command...
$ nxtgen (-v|--version|version)
nxtgen/0.0.0 win32-x64 node-v10.16.3
$ nxtgen --help [COMMAND]
USAGE
  $ nxtgen COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`nxtgen hello [FILE]`](#nxtgen-hello-file)
* [`nxtgen help [COMMAND]`](#nxtgen-help-command)

## `nxtgen hello [FILE]`

describe the command here

```
USAGE
  $ nxtgen hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ nxtgen hello
  hello world from ./src/hello.ts!
```

_See code: [src\commands\hello.ts](https://github.com/ElectronHacked/nxtgen/blob/v0.0.0/src\commands\hello.ts)_

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
<!-- commandsstop -->
