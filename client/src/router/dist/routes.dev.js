"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.studentRoutes = exports.publicRoutes = void 0;
var publicRoutes = [{
  path: '/',
  title: 'Главная'
}, {
  path: '/news',
  title: 'Новости'
}, {
  path: '/events',
  title: 'Мероприятия'
}, {
  path: '/schools',
  title: 'Школы'
}, {
  path: '/login',
  title: 'Войти'
}];
exports.publicRoutes = publicRoutes;
var studentRoutes = [{
  path: '/',
  title: 'Главная'
}, {
  path: '/news',
  title: 'Новости'
}, {
  path: '/events',
  title: 'Мероприятия'
}, {
  path: '/schools',
  title: 'Школы'
}, {
  path: '/student/studio',
  title: 'Студия'
}, {
  path: '/student/profile',
  title: 'Профиль'
}, {
  path: '/student/rating',
  title: 'Рейтинг'
}, {
  path: '/student/schedule',
  title: 'Расписание'
}, {
  path: '/student/shop',
  title: 'Магазин'
}, {
  path: '/student/contacts',
  title: 'Контакты'
}];
exports.studentRoutes = studentRoutes;