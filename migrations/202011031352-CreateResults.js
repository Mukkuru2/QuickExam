
'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Results', {
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
            result: {
                allowNull: false,
                type: Sequelize.JSON
            }

        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Results');
    }
};