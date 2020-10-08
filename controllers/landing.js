
exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Express' });
}

exports.submit_adress = function (req, res, next) {
    console.log("email:", req.body.email_submitted);
    res.redirect('/');
}