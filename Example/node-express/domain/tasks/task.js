const { DataTypes, Model } = require('sequelize');
const sequelize = require('../infrastructure/db');

class Task extends Model {}

Task.init({
  // Model attributes are defined here
  task: {
    type: DataTypes.STRING
  },
  priority: {
    type: DataTypes.STRING
  },
  img: {
    type: DataTypes.BLOB('long')
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
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  timestamps: true,
  tableName: 'tasks'
});


module.exports = Task