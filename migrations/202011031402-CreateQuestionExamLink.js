
'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('QuestionExamLink', {
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            Exam_examId: {
                allowNull: false,
                type: Sequelize.STRING
            },
            Question_questionId: {
                allowNull: false,
                type: Sequelize.STRING
            }
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('QuestionExamLink');
    }
};