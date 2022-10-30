"use strict";

var sequelize = require('../db');

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

var User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    type: DataTypes.STRING
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "USER"
  }
});
var TodoList = sequelize.define('todo_list', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isComplited: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});
User.hasMany(TodoList);
TodoList.belongsTo(User);
module.exports = {
  User: User,
  TodoList: TodoList
};