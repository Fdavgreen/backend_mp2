'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {

    static associate(models) {
      // define association here
    }
  }
  Expense.init({
    id: { 
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    expense: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Expenses',
  });
  return Expense;
};