const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const TodoList = sequelize.define('todo_list', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    isComplited: {type: DataTypes.BOOLEAN, defaultValue: false}
})

User.hasMany(TodoList)
TodoList.belongsTo(User)

module.exports = {
    User, 
    TodoList
}