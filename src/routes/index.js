const homeRouter = require('./home');
const newsRouter = require('./news');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/', homeRouter);
}

module.exports = route;
