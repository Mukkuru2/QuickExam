const models = require("../models");



exports.show_questions = function (req, res, next) {

    return models.Question.findAll().then(questions => {
        res.render('exam/list_questions', {questions: questions, user:req.user});
    })
}

exports.show_question = function (req, res, next) {

    return models.Question.findOne({
        where: {
            id: req.params.question_id
        }
    }).then(question => {
        res.render('exam/question', {question: question, user:req.user});
    })
}

exports.show_add_question = function (req, res, next) {
    return res.render('exam/submit_question', {numAns: req.params.numAns, user:req.user});
}

exports.submit_question = function (req, res, next) {
    console.log(req.body.wrongAns);
    return models.Question.create({
        question: req.body.question,
        thema: req.body.theme,
        correctanswer: req.body.correct,
        wronganswers: req.body.wrongAns

    }).then(email => {
        res.send({msg: "Success"})
    })
}

exports.delete_question_json = function (req, res, next) {
    return models.Question.destroy({
        where: {
            id: req.params.question_id
        }
    }).then(result => {
        res.send({msg: "Success"});
    })
}

exports.num_wrong_answers = function (req, res, next) {
    return next();
}

exports.show_edit_question = function (req, res, next) {
    return models.Question.findOne({
        where : {
            id : req.params.question_id
        }
    }).then(question => {
        res.render('exam/edit_question', { question : question, user:req.user });
    });
}