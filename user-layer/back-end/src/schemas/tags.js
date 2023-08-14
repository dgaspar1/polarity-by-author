const { DataTypes } = require('sequelize');

module.exports = tag = {
    schema: {
        name: {
            type: DataTypes.STRING,
            primaryKey: true
        }
    },
    options: {
        timestamps: false
    }
};