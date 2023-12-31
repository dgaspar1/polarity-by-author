const router = require('express').Router();
const fg = require('fast-glob');

module.exports = (app) => {
    app.use('/api', router);
    fg.sync('**/src/routes/**routes.js').forEach( function(file) {
        require(`../../${file}`)(router);
    });
};