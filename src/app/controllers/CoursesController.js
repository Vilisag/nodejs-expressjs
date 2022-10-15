const Course = require('../models/Course');
const { mongooseToObject, multipleMongooseToObject } = require('../../utils/mongoose');

class CoursesController {
  async store(req, res, next) {
    Course.create(req.body)
      .then(course => res.redirect('/courses'))
      .catch(next);
  }

  async index(req, res, next) {
    Promise.all([Course.find({}), Course.countDeleted()])
      .then(([courses, countDeleted]) => {
        return res.render('courses/index', {
          countDeleted,
          courses: multipleMongooseToObject(courses)
        });
      })
      .catch(next);
  }

  async create(req, res) {
    return res.render('courses/create');
  }

  async show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then(course => res.render('courses/show', { course: mongooseToObject(course) }))
      .catch(next);
  }

  async edit(req, res) {
    Course.findById(req.params.id)
      .then(course => res.render('courses/edit', { course: mongooseToObject(course) }))
      .catch(next);
  }

  async update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/courses'))
      .catch(next);
  }

  async destroy(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect('/courses'))
      .catch(next);
  }

  async trash(req, res, next) {
    Promise.all([Course.findDeleted({}), Course.countDocumentsDeleted()])
      .then(([courses, countDocumentsDeleted]) => {
        res.render('courses/trash', {
          countDocumentsDeleted,
          courses: multipleMongooseToObject(courses)
        });
      })
      .catch(next);
  }

  async restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect('/courses/trash'))
      .catch(next);
  }

  async remove(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('/courses/trash'))
      .catch(next);
  }
}

module.exports = new CoursesController();
