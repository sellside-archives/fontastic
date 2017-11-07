var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var busboy = require('express-busboy');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// file upload
busboy.extend(app, {
  upload: true,  
  path: 'public/uploads',  
});

// utilities
require('./utilities')(app);

// local config
app.set('autotrace', require('./config').autotrace);
app.set('fontcustom', require('./config').fontcustom);

app.use('/', require('./routes'));

module.exports = app;
