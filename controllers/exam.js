const models = require("../models");


exports.show_exam = function (req, res, next) {
    return models.Question.findAll().then(questions => {
        res.render('exam/exam_main', {questions: questions, user:req.user});
    })
}

exports.show_create_exam = function (req, res, next) {
    return models.Question.findAll().then(questions => {
        res.render('exam/create_exam', {questions: getRandomQuestions(questions), user:req.user});
    })
}

exports.create_exam = function (req, res, next) {
    return models.Exam.create({
        name: req.body[0],
        code: makeid(6)
    }).then(exam => {
        for (i = 1;
             i < req.body.length;
             i++) {

            models.QuestionExamLink.create({
                Exam_examId: exam.id,
                Question_questionId: req.body[i]
            })
        }
    }).then(res.send({msg: "Success"}))
}

function getRandomQuestions(questions, n = 10) {
    // Shuffle array
    const shuffledQuestions = questions.sort(() => 0.5 - Math.random());

    // Get sub-array of first 10 elements after shuffled
    return shuffledQuestions.slice(0, n);
}

function makeid(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}