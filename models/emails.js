'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Emails extends Model {

    static associate(models) {
      // define association here
    }
  }
  Emails.init({
    id: { 
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: DataTypes.STRING,
    subject: DataTypes.STRING,
    message: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Emails',
    tableName: 'emails',
    timestamps: false
  });
  return Emails;
};