'use strict';

exports = module.exports = function(app) {
    app.utility = {};
    app.utility.workflow = require('./utilities/workflow');
};
