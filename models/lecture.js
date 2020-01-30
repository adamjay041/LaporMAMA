'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Lecture extends Model{}

  Lecture.init({
    Email: {
      type : DataTypes.STRING,
      validate : {
        isEmail :{
          args : true,
          msg  : 'Harap Menggunakan Format Yang benar'
        }
      }
    },
    Password: DataTypes.STRING
  },{sequelize})
  Lecture.associate = function(models) {
    // associations can be defined here
  };
  return Lecture;
};