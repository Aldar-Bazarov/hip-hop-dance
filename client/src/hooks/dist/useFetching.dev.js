"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFetching = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useFetching = function useFetching(callback) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var fetching = function fetching() {
    var _args = arguments;
    return regeneratorRuntime.async(function fetching$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setIsLoading(true);
            _context.next = 4;
            return regeneratorRuntime.awrap(callback.apply(void 0, _args));

          case 4:
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            setError(_context.t0.message);

          case 9:
            _context.prev = 9;
            setIsLoading(false);
            return _context.finish(9);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 6, 9, 12]]);
  };

  return [fetching, isLoading, error];
};

exports.useFetching = useFetching;