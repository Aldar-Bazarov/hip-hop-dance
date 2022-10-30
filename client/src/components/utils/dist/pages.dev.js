"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPagesArray = exports.getPageCount = void 0;

var getPageCount = function getPageCount(totalCount, limit) {
  return Math.ceil(totalCount / limit);
};

exports.getPageCount = getPageCount;

var getPagesArray = function getPagesArray(totalPages) {
  var result = [];

  for (var i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }

  return result;
};

exports.getPagesArray = getPagesArray;