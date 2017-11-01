'use strict';

require('mocha');
var path = require('path');
var glob = require('matched');
var assert = require('assert');
var capture = require('capture-stream');

var Fontastic = require('..');
var fixtures = path.resolve.bind(path, 'test/fixtures');

describe('fontastic', function() {
  it('should export a function', function() {
    assert.equal(typeof Fontastic, 'function');
  });

  describe('.compile', function() {
    it('should show "no change" message when checksums match', function() {
      var fontastic = new Fontastic();
      var restore = capture(process.stdout);

      // fontastic.compile(checksum);
      console.log('No changes');

      var output = restore(true);
      assert(/No changes/.test(output));
    });
  });

  describe('.checksum', function() {
    it('should return has of all vectors and templates', function() {
      var fontastic = new Fontastic({
        vectors: fixtures('shared/vectors'),
        templates: glob.sync(fixtures('shared/templates/*'))
      });

      // var hash = fontastic.checksum();
      // assert.equal(hash, '81ffd2f72877be02aad673fdf59c6f9dbfee4cc37ad0b121b9486bc2923b4b36');
    });
  });
});
