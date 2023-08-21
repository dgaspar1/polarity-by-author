const SequelizeHelper = require('../helpers/sequelize-helper');

const get = async function(req, res) {
    const Tweets = await SequelizeHelper.getCollection('Tweets');
    const params = req.params;
    
    const author = req.params.author ? req.params.author: '';
    const tag = req.params.tag ? req.params.tag: '';
    let where = { };

    if(author){
        where.author = author;
    }

    if(tag){
        where.tag = tag;
    }

    const tweets = await Tweets.findAll({
        where
    }); 
    res.send(tweets);
};

module.exports = (router) => {
    router.get('/get-tweets-by-authors-tags/:author?/:tag?', get);
};