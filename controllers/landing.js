const models = require("../models");

exports.get_landing = function (req, res, next) {
    res.render('landing', { title: 'Express' });
}

exports.submit_adress = function (req, res, next) {

    return models.TestTable.create({
        email: req.body.email_submitted
    }).then(email => {
        res.redirect('/emails');
    })
}

exports.show_emails = function (req, res, next) {
    return models.TestTable.findAll().then(emails => {
        res.render('landing', { title: 'Express', emails: emails });
    })
}

exports.show_email = function (req, res, next) {
    return models.TestTable.findOne({
        where: {
            id: req.params.email_id
        }
    }).then(email => {
        res.render('email', { email : email });
    })
}