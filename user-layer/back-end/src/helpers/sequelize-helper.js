const { Sequelize } = require('sequelize');

module.exports = {
    async connect(dataBase, user, password){
        this.sequelize = new Sequelize(dataBase, user, password, {
            host: 'localhost',
            dialect: 'postgres'
            });
        await this.sequelize.authenticate();
    },

    async disconnect() {
        await this.sequelize.close();
    },

    async getCollection(name) {
        return this.sequelize.model(name);
    },

    async newCollection(name, schema) {
        return this.sequelize.define(name, schema);
    },

    async sync(){
        this.sequelize.sync();
    }
}