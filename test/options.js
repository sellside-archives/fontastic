'use strict';

require('mocha');
var path = require('path');
var glob = require('matched');
var assert = require('assert');
var capture = require('capture-stream');

var Fontastic = require('..');
var fixtures = path.resolve.bind(path, 'test/fixtures');

describe('options', function() {
  describe('.overwrite_examples', function() {
    it('should overwite example defaults with real defaults', function() {
    });
  });

  describe('.set_config_path', function() {
    describe('when :config is set', function() {
      it('should use options[:config] if it\'s a file', function() {
      });

      it('should search for fontastic.yml if options[:config] is a dir', function() {
      });

      it('should raise error if :config doesn\'t exist', function() {
      });
    });

    describe('when :config is not set', function() {
      it('should find fontastic.yml in the same dir as the manifest', function() {
      });

      it('should find fontastic.yml at config/fontastic.yml', function() {
      });

      it('should be false if nothing is found', function() {
      });
    });
  });

  describe('.load_config', function() {
    it('should warn if fontastic.yml is blank', function() {
    });

    it('should raise error if fontastic.yml isn\'t valid', function() {
    });

    it('should assign empty hash :config is false', function() {
    });

    describe('when :debug is true', function() {
      it('should report which configuration file it\'s using', function() {
      });
    });
  });

  describe('.merge_options', function() {
    it('should overwrite defaults with config options', function() {
    });

    it('should overwrite config file and defaults with CLI options', function() {
    });
  });

  describe('.clean_font_name', function() {
    it('should normalize the font name', function() {
    });
  });

  describe('.set_input_paths', function() {
    it('should raise error if input[:vectors] doesn\'t contain SVGs', function() {
    });

    describe('when :input is a hash', function() {
      it('should set :templates as :vectors if :templates isn\'t set', function() {
      });

      it('should preserve :templates if it\'s set', function() {
      });

      it('should raise an error if :vectors isn\'t set', function() {
      });

      it('should raise an error if :vectors doesn\'t point to an existing directory', function() {
      });
    });

    describe('when :input is a string', function() {
      it('should return a hash of locations', function() {
      });

      it('should set :templates to match :vectors', function() {
      });

      it('should raise an error if :vectors doesn\'t point to a directory', function() {
      });
    });
  });

  describe('.set_output_paths', function() {
    describe('when :output is nil', function() {
      describe('when :debug is true', function() {
        it('should print a warning', function() {
        });
      });
    });

    describe('when :output is a hash', function() {
      it('should set :css and :preview to match :fonts if either aren\'t set', function() {
      });

      it('should preserve :css and :preview if they do exist', function() {
      });

      it('should create additional paths if they are given', function() {
      });

      it('should raise an error if :fonts isn\'t set', function() {
      });
    });

    describe('when :output is a string', function() {
      it('should return a hash of output locations', function() {
      });

      it('should set :css and :preview to match :fonts', function() {
      });

      it('should raise an error if :fonts exists but isn\'t a directory', function() {
      });
    });
  });

  describe('.check_template_paths', function() {
    it('should raise an error if a template does not exist', function() {
    });
  });
});
