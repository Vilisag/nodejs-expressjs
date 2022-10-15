const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../utils/mongoose');

class HomeController {
    async index(req, res, next) {
        Course.find({})
            .then(courses => {
                return res.render('home', {
                    courses: multipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }

    async search(req, res) {
        return res.render('Search');
    }
}

module.exports = new HomeController();
