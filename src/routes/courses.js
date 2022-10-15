const express = require('express');
const route = express.Router();

const coursesController = require('../app/controllers/CoursesController');

route.get('/trash', coursesController.trash);
route.get('/create', coursesController.create);
route.post('/store', coursesController.store);
route.post('/:id/update', coursesController.update);
route.post('/:id/delete', coursesController.destroy);
route.post('/:id/remove', coursesController.remove);
route.get('/:id/edit', coursesController.edit);
route.get('/:id/restore', coursesController.restore);
route.get('/:slug', coursesController.show);
route.get('/', coursesController.index);

module.exports = route;
