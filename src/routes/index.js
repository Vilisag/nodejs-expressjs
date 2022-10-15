const homeRouter = require('./home');
const coursesRouter = require('./courses');
const newsRouter = require('./news');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/', homeRouter);
}

module.exports = route;
