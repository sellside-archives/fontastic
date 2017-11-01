'use strict';

require('mocha');
var assert = require('assert');
var fontastic = require('..');

describe('fontastic', function() {
  it('should export a function', function() {
    assert.equal(typeof fontastic, 'function');
  });
});
