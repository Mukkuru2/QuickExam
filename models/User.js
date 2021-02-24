'use strict';
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        username: {
            allowNull: true,
            type: DataTypes.STRING
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING
        },
        email: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING
        },
        firstname: {
            allowNull: true,
            type: DataTypes.STRING
        },
        middlename: {
            allowNull: true,
            type: DataTypes.STRING
        },
        lastname: {
            allowNull: true,
            type: DataTypes.STRING
        },
        is_admin: {
            allowNull: true,
            type: DataTypes.BOOLEAN
        }
    });

    return User;
};