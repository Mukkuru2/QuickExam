const models = require("../models");


exports.show_start_exam = function (req, res, next) {
    res.render('student_end/find_exam', {});
}

exports.start_exam = async function (req, res, next) {
    let questions = [];
    //Find exam code
    const questionIds = await models.Exam.findOne({
        where: {
            code: req.body.exam_code
        }
    }).then(
        //Find corresponding question Ids
        exam => {
            return models.QuestionExamLink.findAll({
                where: {
                    Exam_examId: exam.id
                }
            })
        })

    for await (const questionPromise of questionIds) {
        const question = await models.Question.findOne({
            where: {
                id: questionPromise.Question_questionId
            }
        })
        questions.push(question);
    }

    res.render('student_end/start_exam', {questions: questions})
}
