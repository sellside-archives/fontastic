var fs = require('fs');
var path = require('path');

/**
 * File upload
 */

exports.init = function(req, res) {
  var workflow = req.app.utility.workflow(req, res);
  var filename = req.files.file.filename;

  // get extension name and basename
  var extname = path.extname(filename);
  var basename = path.basename(filename, extname);
  var newFilename = '';

  workflow.on('validate', function() {
    switch (extname) {
      case '.png':
        newFilename = path.join(__dirname, '../../public/fontcustom/png', filename);
        break;
      case '.svg':
        newFilename = path.join(__dirname, '../../public/fontcustom/svg', filename);
        break;
    }

    return workflow.emit('copy');
  });

  workflow.on('clean', function() {
    var childProcess = require('child_process');
    var childArgs = [
      '-f',
      'svg/*.svg'
    ];

    var options = {
      cwd: path.join(__dirname, '../../public/fontcustom')
    };

    // $ rm -f svg/*.svg
    childProcess.execFile('rm', childArgs, options, function(err, stdout, stderr) {
      if (err) {
        return workflow.emit('exception', err);
      }
    });
  });

  workflow.on('copy', function() {
    fs.readFile(req.files.file.file, function(err, data) {
      if (err) {
        return workflow.emit('exception', err);
      }

      fs.writeFile(newFilename, data, function(err) {
        if (err) {
          return workflow.emit('exception', err);
        }

        if (extname === '.png') {
          return workflow.emit('convert');
        }

        return workflow.emit('compile');
      });
    });
  });

  workflow.on('convert', function() {
    var childProcess = require('child_process');
    var childArgs = [
      '-background-color',
      'FFFFFF',
      '-output-format',
      'svg',
      'png/' + basename + '.png',
      '-output-file',
      'svg/' + basename + '.svg',
      '--debug'
    ];

    var options = {
      cwd: path.join(__dirname, '../../public/fontcustom')
    };

    // $ autotrace -output-format svg demo.png  -output-file demo.svg
    childProcess.execFile(req.app.get('autotrace'), childArgs, options, function(err, stdout, stderr) {
      if (err) {
        return workflow.emit('exception', err);
      }

      return workflow.emit('compile');
    });
  });

  workflow.on('compile', function() {
    var childProcess = require('child_process');

    // MD5
    var crypto = require('crypto');
    var name = req.files.file.path;
    var hash = '' + crypto.createHash('md5').update(name).digest('hex');

    var childArgs = [
      'compile',
      'svg'
    ];

    var options = {
      cwd: path.join(__dirname, '../../public/fontcustom')
    };

    childProcess.execFile(req.app.get('fontcustom'), childArgs, options, function(err, stdout, stderr) {
      if (err) {
        return workflow.emit('exception', err);
      }

      workflow.outcome.console = stdout;
      workflow.outcome.revision = hash;

      console.log(workflow.outcome);

      return workflow.emit('response');
    });
  });

  return workflow.emit('validate');
};
