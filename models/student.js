'use strict';
const capitalize = require('../helpers/StudentModelHelper.js')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Student extends Model{}
  Student.init({
    StudentName: DataTypes.STRING,
    totalScore: DataTypes.INTEGER,
    totalAbsen: DataTypes.INTEGER
  }, {
    sequelize,
    hooks: {
      beforeCreate: capitalize,
      beforeUpdate: capitalize
    }
  })
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};