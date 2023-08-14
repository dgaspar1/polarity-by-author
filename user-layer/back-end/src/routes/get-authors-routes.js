const SequelizeHelper = require('../helpers/sequelize-helper');

const get = async function(req, res) {
    const Authors = await SequelizeHelper.getCollection('Authors');
    const authors = await Authors.findAll();
    res.send(authors);
};

module.exports = (router) => {
    router.get('/get-authors', get);
};