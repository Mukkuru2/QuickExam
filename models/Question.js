'use strict';
module.exports = (sequelize, DataTypes) => {
    var Question = sequelize.define('Question', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        question: {
            allowNull: false,
            type: DataTypes.STRING
        },
        thema: {
            allowNull: false,
            type: DataTypes.STRING
        },
        questionType: {
            allowNull: true,
            type: DataTypes.STRING
        },
        correctanswer: {
            allowNull: false,
            type: DataTypes.STRING
        },
        wronganswers: {
            allowNull: true,
            type: DataTypes.TEXT,
            get: function () {
                return JSON.parse(this.getDataValue('wronganswers'));
            },
            set: function (value) {
                this.setDataValue('wronganswers', JSON.stringify(value));
            }
        }
    });

    return Question;
};