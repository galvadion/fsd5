const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tareas', 'postgres', 'testing', {
    host: 'localhost',
    dialect: 'postgres'
  });

  module.exports = sequelize;