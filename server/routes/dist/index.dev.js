"use strict";

var Router = require('express');

var router = new Router();

var userRouter = require('./userRouter');

var todoRouter = require('./todoRouter');

router.use('/user', userRouter);
router.use('/todo', todoRouter);
module.exports = router;