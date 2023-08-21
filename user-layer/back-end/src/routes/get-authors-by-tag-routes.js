const SequelizeHelper = require('../helpers/sequelize-helper');
const { Op } = require("sequelize");

const get = async function(req, res) {
    const AuthorsByTag = await SequelizeHelper.getCollection('AuthorsByTag');
    
    const params = req.params;
    if(!params.tag){ return }
    const tag = params.tag;

    const where = {
        tagList: {
            [Op.like]: `%${tag}%`
        }
    };

    const authors = await AuthorsByTag.findAll({
        where
    }); 
    res.send(authors);
};

module.exports = (router) => {
    router.get('/get-authors-by-tag/:tag', get);
};