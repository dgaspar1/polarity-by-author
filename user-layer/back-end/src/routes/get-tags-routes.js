const SequelizeHelper = require('.././helpers/sequelize-helper');

const get = async function(req, res) {
    const Tags = await SequelizeHelper.getCollection('Tags');
    const tags = await Tags.findAll();
    res.send(tags);
};

module.exports = (router) => {
    router.get('/get-tags', get);
};