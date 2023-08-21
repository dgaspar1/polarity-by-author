const SequelizeHelper = require('../helpers/sequelize-helper');
const { Op } = require("sequelize");

const post = async function(req, res) {
    const Tweets = await SequelizeHelper.getCollection('Tweets');
    console.log('Authors ############');
    console.log(req.body.authors);
    const authors = req.body.authors;
    const tag = req.body.tag;
    const where = {};

    if(authors){
        where.author = {
            [Op.or]: authors
        };
    }

    if(tag){
        where.tag = tag;
    }

    const tweets = await Tweets.findAll({
        where
    });
    console.log(tweets);
    res.send(tweets);
};

module.exports = (router) => {
    router.post('/get-tweets-params', post);
};