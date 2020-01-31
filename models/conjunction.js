'use strict';
module.exports = (sequelize, DataTypes) => {
  const Conjunction = sequelize.define('Conjunction', {
    LessonId: DataTypes.INTEGER,
    StudentId: DataTypes.INTEGER,
    Nilai: DataTypes.INTEGER
  }, {});
  Conjunction.associate = function(models) {
    // associations can be defined here
  };
  return Conjunction;
};