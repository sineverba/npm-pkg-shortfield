| CI / CD | Status |
| ------- | ------ |
| Coverall | [![Coverage Status](https://coveralls.io/repos/github/sineverba/npm-pkg-shortfield/badge.svg?branch=master)](https://coveralls.io/github/sineverba/npm-pkg-shortfield?branch=master) |

`short field` returns a string truncated after X characters, concatenated with "..." (three dots).

Useful in tables with long strings.

E.g. "This is a very long string" will return ""

## Installation
`npm install shortfield`

## Usage

```js
var shortener = require('shortfield');
var shorted = shortener("This is a long string");
console.log(shorted); // returns 
```

## Tests

`npm test` for simple test

`npm cover` for coverage