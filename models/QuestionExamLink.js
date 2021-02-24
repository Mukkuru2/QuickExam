module.exports = (sequelize, DataTypes) => {
    var QuestionExamLink = sequelize.define('QuestionExamLink', {
        question_number: {
            allowNull: false,
            type: DataTypes.STRING
        },
        answer_order: {
            allowNull: false,
            type: DataTypes.INT
        }
    })
    return QuestionExamLink;
}