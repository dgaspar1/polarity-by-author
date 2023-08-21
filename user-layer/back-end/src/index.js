const env = require('./configs/env');
const SequelizeHelper = require('./helpers/sequelize-helper');
const AuthorsSchema = require('./schemas/authors');
const TagsSchema = require('./schemas/tags');
const TweetsSchema = require('./schemas/tweets');
const AuthorsByTagSchema = require('./schemas/authors-by-tag');

SequelizeHelper.connect(env.localDataBase, env.user, env.password).then(
    async () => {
        const Authors = SequelizeHelper.newCollection('Authors', AuthorsSchema);
        const Tags = SequelizeHelper.newCollection('Tags', TagsSchema);
        const Tweets = SequelizeHelper.newCollection('Tweets', TweetsSchema);
        const AuthorsByTag = SequelizeHelper.newCollection('AuthorsByTag', AuthorsByTagSchema);
        await SequelizeHelper.sync();
        const app = require('./configs/app');
         
        app.listen(env.port, () => {
            console.log('Servidor em execução na porta: ' + env.port);
        });
    }
);
