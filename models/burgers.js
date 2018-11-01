'use strict';
const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
    const
     burgers = sequelize.define('burgers', {
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN
    }, {
        timestamps: false,
        // freezeTableName: true,
        tableName: 'burgers'
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return burgers;
};