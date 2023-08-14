const SequelizeHelper = require('.././helpers/sequelize-helper');

const get = async function(req, res) {
    const Tweets = await SequelizeHelper.getCollection('Tweets');
    const tweets = await Tweets.findAll();
    res.send(tweets);
};

module.exports = (router) => {
    router.get('/get-tweets', get);
};