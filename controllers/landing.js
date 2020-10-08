const models = require("../models");

exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Express' });
}

exports.submit_adress = function (req, res, next) {

    return models.TestTable.create({
        email: req.body.email_submitted
    }).then(email => {
        res.redirect('/');
    })
}