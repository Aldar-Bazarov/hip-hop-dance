"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

// import { reducer as formReducer } from 'redux-form';
var reducers = combineReducers({// profilePage: profileReducer,
  // dialogsPage: dialogsReducer,
  // usersPage: usersReducer,
  // auth: authReducer,
  // form: formReducer
});
var store = (0, _redux.legacy_createStore)(reducers);
var _default = store;
exports["default"] = _default;