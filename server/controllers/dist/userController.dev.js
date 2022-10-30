"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ApiError = require('../error/ApiError');

var bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');

var _require = require('../models/models'),
    User = _require.User;

var generateJwt = function generateJwt(id, email, role) {
  return jwt.sign({
    id: id,
    email: email,
    role: role
  }, process.env.SECRET_KEY, {
    expiresIn: '24h'
  });
};

var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, [{
    key: "registration",
    value: function registration(req, res, next) {
      var _req$body, email, password, role, candidate, hashPassword, user, token;

      return regeneratorRuntime.async(function registration$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$body = req.body, email = _req$body.email, password = _req$body.password, role = _req$body.role;

              if (!(!email || !password)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", next(ApiError.badRequest('Некорректный email или password')));

            case 3:
              _context.next = 5;
              return regeneratorRuntime.awrap(User.findOne({
                where: {
                  email: email
                }
              }));

            case 5:
              candidate = _context.sent;

              if (!candidate) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", next(ApiError.badRequest('Пользователь с таким email уже существует')));

            case 8:
              _context.next = 10;
              return regeneratorRuntime.awrap(bcrypt.hash(password, 5));

            case 10:
              hashPassword = _context.sent;
              _context.next = 13;
              return regeneratorRuntime.awrap(User.create({
                email: email,
                role: role,
                password: hashPassword
              }));

            case 13:
              user = _context.sent;
              token = generateJwt(user.id, user.email, user.role);
              return _context.abrupt("return", res.json({
                token: token
              }));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "login",
    value: function login(req, res, next) {
      var _req$body2, email, password, user, comparePassword, token;

      return regeneratorRuntime.async(function login$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
              _context2.next = 3;
              return regeneratorRuntime.awrap(User.findOne({
                where: {
                  email: email
                }
              }));

            case 3:
              user = _context2.sent;

              if (user) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt("return", next(ApiError.internal('Пользователь не найден')));

            case 6:
              comparePassword = bcrypt.compareSync(password, user.password);

              if (comparePassword) {
                _context2.next = 9;
                break;
              }

              return _context2.abrupt("return", next(ApiError.internal('Указан неверный пароль')));

            case 9:
              token = generateJwt(user.id, user.email, user.role);
              return _context2.abrupt("return", res.json({
                token: token
              }));

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "check",
    value: function check(req, res, next) {
      var token;
      return regeneratorRuntime.async(function check$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              token = generateJwt(req.user.id, req.user.email, req.user.role);
              return _context3.abrupt("return", res.json({
                token: token
              }));

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }]);

  return UserController;
}();

module.exports = new UserController();