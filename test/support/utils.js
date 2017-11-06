'use strict';

var path = require('path');
var Fontastic = require('../..');

exports.fixtures = path.resolve.bind(path, 'test/fixtures');

exports.manifest = {
  checksum: {
    current: '82a59e769bc60192484f2620570bbb59e225db97c1aac3f242a2e49d6060a19c',
    previous: '82a59e769bc60192484f2620570bbb59e225db97c1aac3f242a2e49d6060a19c'
  },
  fonts: [
    'fontastic/fontastic_82a59e769bc60192484f2620570bbb59.ttf',
    'fontastic/fontastic_82a59e769bc60192484f2620570bbb59.svg',
    'fontastic/fontastic_82a59e769bc60192484f2620570bbb59.woff',
    'fontastic/fontastic_82a59e769bc60192484f2620570bbb59.eot'
  ],
  glyphs: {
    'a_r3ally-exotic-f1le-name': {
      codepoint: 61696,
      source: 'vectors/a_R3ally-eXotic f1Le Name.svg'
    },
    c: {
      codepoint: 61697,
      source: 'vectors/C.svg'
    },
    d: {
      codepoint: 61698,
      source: 'vectors/D.svg'
    }
  },
  options: {
    autowidth: false,
    config: false,
    css_selector: '.icon-{{glyph}}',
    debug: false,
    font_name: 'fontastic',
    force: true,
    input: {
      templates: 'vectors',
      vectors: 'vectors'
    },
    no_hash: false,
    output: {
      css: 'fontastic',
      fonts: 'fontastic',
      preview: 'fontastic'
    },
    preprocessor_path: nil,
    quiet: true,
    templates: [
      'css',
      'scss',
      'preview'
    ]
  },
  templates: []
};

exports.test_manifest = function(options = {input: 'vectors', quiet: true}) {
  var fontastic = new Fontastic(options);
  var manifest = fontastic.manifest;
  var checksum = fontastic.checksum();
  manifest.set(checksum, {current: checksum, previous: '' });
  return manifest;
};
