const { DataTypes } = require('sequelize');

module.exports = authorsByTag = {
    schema:{
        author: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        tagList: {
            type: DataTypes.STRING
        }
    },
    options: {
        timestamps: false
    }
};