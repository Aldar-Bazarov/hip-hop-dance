"use strict";

var jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    var token = req.headers.authorization.split(' ')[1]; // Bearer asfasnfkajsfnjk

    if (!token) {
      return res.status(401).json({
        message: "Не авторизован"
      });
    }

    var decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({
      message: "Не авторизован"
    });
  }
};