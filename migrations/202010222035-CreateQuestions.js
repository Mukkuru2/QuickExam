
'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Questions', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            question: {
                allowNull: false,
                type: Sequelize.TEXT
            },
            thema: {
                allowNull: false,
                type: Sequelize.STRING
            },
            questionType: {
                allowNull: true,
                type: Sequelize.STRING
            },
            correctanswer: {
                allowNull: false,
                type: Sequelize.STRING
            },
            wronganswers: {
                allowNull: true,
                type: Sequelize.TEXT
            }
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Questions');
    }
};