'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lesson = sequelize.define('Lesson', {
    NameLesson: DataTypes.STRING
  }, {});
  Lesson.associate = function(models) {
    // associations can be defined here
  };
  return Lesson;
};