| CI / CD | Status |
| ------- | ------ |
| NPM | [![npm version](https://badge.fury.io/js/shortfield.svg)](https://badge.fury.io/js/shortfield) |
| Semaphore CI | [![Build Status](https://sineverba.semaphoreci.com/badges/npm-pkg-shortfield/branches/master.svg)](https://sineverba.semaphoreci.com/projects/npm-pkg-shortfield) |
| Circle CI | [![CircleCI](https://circleci.com/gh/sineverba/npm-pkg-shortfield.svg?style=svg)](https://circleci.com/gh/sineverba/npm-pkg-shortfield) |
| Coverall | [![Coverage Status](https://coveralls.io/repos/github/sineverba/npm-pkg-shortfield/badge.svg?branch=master)](https://coveralls.io/github/sineverba/npm-pkg-shortfield?branch=master) |
| SonarCloud | [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=npm-pkg-shortfield&metric=alert_status)](https://sonarcloud.io/dashboard?id=npm-pkg-shortfield) |

`shortfield` returns a string truncated after X characters (default 10), concatenated with "..." (three dots).

Useful in tables with long strings.

E.g. "This is a long string" will return "This is a ..."

## Installation
`npm install @sineverba/shortfield`

## Usage

```js
import { Shortener } from "shortfield";

var shorted = Shortener("This is a long string"); // default length is 10
console.log(shorted); // returns This is a ...

var shorted = Shortener("This is a long string", 4);
console.log(shorted); // returns This...
```
