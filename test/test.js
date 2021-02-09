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
})