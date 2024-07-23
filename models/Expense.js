const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const Expense = sequelize.define('Expense', {
  userId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  type: {
    type: DataTypes.ENUM,
    values: ['mortgage/rent', 'utilities', 'groceries', 'car', 'health', 'misc', 'entertainment'],
    allowNull: false
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  description: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'expenses'
});

module.exports = Expense;
