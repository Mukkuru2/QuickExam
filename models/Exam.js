'use strict';
module.exports = (sequelize, DataTypes) => {
    var Exam = sequelize.define('Exam', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        code: {
            allowNull: false,
            type: DataTypes.STRING
        }
    });

    return Exam;
};