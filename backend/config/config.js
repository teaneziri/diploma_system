// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('diploma_system', 'root', 'root123', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
