| CI / CD | Status |
| ------- | ------ |
| Coverall | [![Coverage Status](https://coveralls.io/repos/github/sineverba/npm-pkg-shortfield/badge.svg?branch=master)](https://coveralls.io/github/sineverba/npm-pkg-shortfield?branch=master) |

`short field` returns a string truncated after 10 characters, concatenated with "..." (three dots).

Useful in tables with long strings.

E.g. "This is a long string" will return "This is a ..."

## Installation
`npm install shortfield`

## Usage

```js
var shortener = require('shortfield');
var shorted = shortener("This is a long string");
console.log(shorted); // returns This is a ...
```

## Tests

`npm test` for simple test

`npm cover` for coverage