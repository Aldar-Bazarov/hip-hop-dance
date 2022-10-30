"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNews = void 0;

var _newsData = require("./data/newsData");

var getNews = function getNews() {
  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var newArray = [];
  var index = limit * page - limit;

  for (var i = 0; i < _newsData.arrayNews.length; i++) {
    if (i >= index && i < index + limit) {
      newArray.push(_newsData.arrayNews[i]);
    }
  }

  return new Promise(function (resolve, reject) {
    resolve(newArray);
  });
};

exports.getNews = getNews;