"use strict";

var Router = require('express');

var router = new Router();

var userController = require('../controllers/userController');

var authMiddleware = require('../middleware/authMiddleware');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.check);
module.exports = router;