const models = require("../models");

exports.get_landing = function (req, res, next) {
    res.render('landing', {title: 'Email test!', user:req.user });
}

exports.submit_email = function (req, res, next) {

    return models.TestTable.create({
        email: req.body.email_submitted
    }).then(email => {
        res.redirect('/emails');
    })
}
