const { DataTypes, Model } = require('sequelize');
const sequelize = require('../infrastructure/db');

class Task extends Model {}

Task.init({
  // Model attributes are defined here
  task: {
    type: DataTypes.STRING,
    allowNull: false
  },
  priority: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city:{
    type: DataTypes.STRING,
    defaultValue: 'Casa',
    allowNull:false
  },
  id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Task', // We need to choose the model name
  createdAt: false,
  updatedAt: false,
  timestamps: false,
  tableName: 'tasks'
});


module.exports = Task