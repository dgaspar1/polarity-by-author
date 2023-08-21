const SequelizeHelper = require('.././helpers/sequelize-helper');

const get = async function(req, res) {
    const Tweets = await SequelizeHelper.getCollection('Tweets');
    const params = req.params;
    if(!params.name){ return }
    const name = params.name;

    const tweets = await Tweets.findAll({
        where: {author: name}
    }); 
    res.send(tweets);
};

module.exports = (router) => {
    router.get('/get-tweets-by-author/:name', get);
};