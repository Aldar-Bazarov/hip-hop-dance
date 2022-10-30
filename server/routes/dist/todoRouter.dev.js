"use strict";

var Router = require('express');

var router = new Router();

var todoController = require('../controllers/todoController');

router.post('/', todoController.create);
router.get('/', todoController.getAll);
module.exports = router;