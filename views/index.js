exports.init = function (req, res, next)
{
    var workflow = req.app.utility.workflow(req, res);

    workflow.on('render', function() {
        res.render('index');
    });

    return workflow.emit('render');
};
