"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.studentRoutes = exports.publicRoutes = void 0;

var _Main = _interopRequireDefault(require("./components/public/Main/Main"));

var _News = _interopRequireDefault(require("./components/public/News/News"));

var _Events = _interopRequireDefault(require("./components/public/Events/Events"));

var _Schools = _interopRequireDefault(require("./components/public/Schools/Schools"));

var _StudentMain = _interopRequireDefault(require("./components/student/MainPage/StudentMain"));

var _StudentProfile = _interopRequireDefault(require("./components/student/ProfilePage/StudentProfile"));

var _StudentRating = _interopRequireDefault(require("./components/student/RatingPage/StudentRating"));

var _StudentSchedule = _interopRequireDefault(require("./components/student/SchedulePage/StudentSchedule"));

var _StudentShop = _interopRequireDefault(require("./components/student/ShopPage/StudentShop"));

var _StudentContacts = _interopRequireDefault(require("./components/student/ContactsPage/StudentContacts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var publicRoutes = [{
  path: '/',
  component: _Main["default"],
  exact: true,
  title: 'Главная'
}, {
  path: '/news',
  component: _News["default"],
  exact: true,
  title: 'Новости'
}, {
  path: '/events',
  component: _Events["default"],
  exact: true,
  title: 'Мероприятия'
}, {
  path: '/schools',
  component: _Schools["default"],
  exact: true,
  title: 'Новости'
}];
exports.publicRoutes = publicRoutes;
var studentRoutes = [{
  path: '/student/main',
  component: _StudentMain["default"],
  exact: true,
  title: 'Главная'
}, {
  path: '/student/profile',
  component: _StudentProfile["default"],
  exact: true,
  title: 'Главная'
}, {
  path: '/student/rating',
  component: _StudentRating["default"],
  exact: true,
  title: 'Главная'
}, {
  path: '/student/shedule',
  component: _StudentSchedule["default"],
  exact: true,
  title: 'Главная'
}, {
  path: '/student/shop',
  component: _StudentShop["default"],
  exact: true,
  title: 'Главная'
}, {
  path: '/student/contacts',
  component: _StudentContacts["default"],
  exact: true,
  title: 'Главная'
}];
exports.studentRoutes = studentRoutes;