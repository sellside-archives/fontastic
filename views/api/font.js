/* 
 * POST /1/font
 */
exports.create = function(req, res) {
    var workflow = req.app.utility.workflow(req, res);

    workflow.on('validate', function() {
    });

    return workflow.emit('validate');
};

/* 
 * GET /1/font
 */
exports.read = function(req, res) {
    var workflow = req.app.utility.workflow(req, res);

    workflow.on('validate', function() {
    });

    return workflow.emit('validate');
};

/* 
 * GET /1/font/:id
 */
exports.readById = function(req, res) {
    var workflow = req.app.utility.workflow(req, res);

    workflow.on('validate', function() {
    });

    return workflow.emit('validate');
};

/* 
 * POST /1/font/:id/svg
 */
exports.addFontIconById = function(req, res) {
    var workflow = req.app.utility.workflow(req, res);

    workflow.on('validate', function() {
    });

    return workflow.emit('validate');
};

/* 
 * DELETE /1/font/:id/svg
 */
exports.removeFontIconById = function(req, res) {
    var workflow = req.app.utility.workflow(req, res);

    workflow.on('validate', function() {
    });

    return workflow.emit('validate');
};