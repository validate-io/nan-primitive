nan-primitive
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is a NaN primitive.


## Installation

``` bash
$ npm install validate.io-nan-primitive
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isnan = require( 'validate.io-nan-primitive' );
```

#### isnan( value )

Validates if a `value` is a `NaN` primitive.

``` javascript
var value = NaN;

var bool = isnan( value );
// returns true
```

__Note__: the method first validates that a `value` is `numeric` before validating if a `value` is `NaN`. For non-numeric values, the method returns `false`.


## Examples

``` javascript
var isnan = require( 'validate.io-nan-primitive' );

console.log( isnan( NaN ) );
// returns true

console.log( isnan( new Number( NaN ) ) );
// returns false

console.log( isnan( '5' ) );
// returns false

console.log( isnan( 5 ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-nan-primitive.svg
[npm-url]: https://npmjs.org/package/validate.io-nan-primitive

[travis-image]: http://img.shields.io/travis/validate-io/nan-primitive/master.svg
[travis-url]: https://travis-ci.org/validate-io/nan-primitive

[coveralls-image]: https://img.shields.io/coveralls/validate-io/nan-primitive/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/nan-primitive?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/nan-primitive.svg
[dependencies-url]: https://david-dm.org/validate-io/nan-primitive

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/nan-primitive.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/nan-primitive

[github-issues-image]: http://img.shields.io/github/issues/validate-io/nan-primitive.svg
[github-issues-url]: https://github.com/validate-io/nan-primitive/issues
