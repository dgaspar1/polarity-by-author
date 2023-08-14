const { DataTypes } = require('sequelize');

module.exports = author = {
    schema:{
        name: {
            type: DataTypes.STRING,
            primaryKey: true
        }
    },
    options: {
        timestamps: false
    }
};