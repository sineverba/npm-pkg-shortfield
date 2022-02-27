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
`npm install shortfield`

## Usage

```js
var shortener = require('shortfield');
var shorted = shortener("This is a long string"); // default length is 10
console.log(shorted); // returns This is a ...

var shorted = shortener("This is a long string", 4);
console.log(shorted); // returns This...
```

## Tests

`npm run test` for simple test

`npm run cover` for coverage

### SonarQube (local Docker)
+ Copy `.env.bak` in `.env`
+ Spin images `docker-compose up -d`
+ Create a new project inside Sonarqube and grab the token
+ Replace the token in the ENV var of `docker-compose.yml` file
+ Replace the URL in the ENV var of `docker-compose.yml` file (optional, only if you change docker-compose or use your own Sonarqube)
+ Stop with `docker-compose stop` and restart with `docker-compose up -d`
+ Next spin with `make sonar`