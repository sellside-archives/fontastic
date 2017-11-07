'use strict';

var express = require('express');
var router = express.Router();

//front end
router.get('/', require('./views/index').init);

/**
 * REST APIs: the uploeader
 */
router.post('/1/upload', require('./views/api/uploader').init);

/**
 * REST APIs: the font custom wrapper
 */
router.post('/1/font', require('./views/api/font').create);
router.get('/1/font', require('./views/api/font').read);
router.get('/1/font/:id', require('./views/api/font').readById);
router.post('/1/font/:id/svg', require('./views/api/font').addFontIconById);
router.delete('/1/font/:id/svg', require('./views/api/font').removeFontIconById);

//route not found
router.all('*', require('./views/http/index').http404);

module.exports = router;
