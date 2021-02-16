'use strict';

var expect = require('chai').expect;
var shortener = require('../index');
const { assert } = require('chai');

describe('#shortener', function() {
    it('Should throws error', function() {
        assert.throws( () => {
            shortener();
        }, Error)
    });

    it('Should return same string if length is lesser than 10 chars', function() {
        var originalString = "foo";
        var result = shortener(originalString);
        expect(result).to.equal("foo");
    });

    it('Should return truncated string if length is equal or greater than 10 chars', function() {
        var originalString = "This is a long string";
        var result = shortener(originalString);
        expect(result).to.equal("This is a ...");
    });
})