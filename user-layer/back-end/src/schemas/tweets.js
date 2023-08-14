const { DataTypes } = require('sequelize');

module.exports = tweet = {
    schema: {
        id: {
            type: DataTypes.STRING(18),
            primaryKey: true,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        text: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        polarity: {
            type: DataTypes.FLOAT,
            allowNull: true
        }, 
        tag: {
            type: DataTypes.STRING, 
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE, 
            allowNull: true
        }
    },
    options: {
        timestamps: false
    }
};