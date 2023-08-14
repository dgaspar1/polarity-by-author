require('dotenv/config');

module.exports = {
    port: process.env.port,
    user: process.env.USER,
    password: process.env.PASSWORD,
    localDataBase: process.env.LOCALDATABASE,
    dataBaseHost: process.env.DATABASEHOST
};