'use strict';
module.exports = (sequelize, DataTypes) => {
    var TestTable = sequelize.define('TestTable', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,

            allowNull: false,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return TestTable;
};