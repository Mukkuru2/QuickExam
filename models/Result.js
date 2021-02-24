'use strict';
module.exports = (sequelize, DataTypes) => {
    var Result = sequelize.define('Result', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        result: {
            allowNull: false,
            type: DataTypes.JSON
        }
    });

    return Result;
};