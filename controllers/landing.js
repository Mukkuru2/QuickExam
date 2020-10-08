const models = require("../models");

exports.get_landing = function (req, res, next) {
    res.render('landing', { title: 'Email test!' });
}

exports.submit_email = function (req, res, next) {

    return models.TestTable.create({
        email: req.body.email_submitted
    }).then(email => {
        res.redirect('/emails');
    })
}

exports.show_emails = function (req, res, next) {
    return models.TestTable.findAll().then(emails => {
        res.render('landing', { title: 'Email test!', emails: emails });
    })
}

exports.show_email = function (req, res, next) {
    return models.TestTable.findOne({
        where: {
            id: req.params.email_id
        }
    }).then(email => {
        res.render('email', { email: email });
    })
}

exports.show_edit_email = function (req, res, next) {
    return models.TestTable.findOne({
        where: {
            id: req.params.email_id
        }
    }).then(email => {
        res.render('email/edit_email', { email: email });
    })
}

exports.edit_email = function (req, res, next) {
    console.log(req.body.email, req.params.email_id);
    return models.TestTable.update({
        email: req.body.email_submitted
    }, {
        where: {
            id: req.params.email_id
        }
    }).then(result => {
        res.redirect('/email/' + req.params.email_id);
    })
}