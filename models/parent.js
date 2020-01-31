'use strict';
const capitalizeParent = require('../helpers/ParentModelHelper.js')
const { Op } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Parent extends Model{}
  Parent.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        emailValidation(value, next) {
          Parent.findAll({
            where: {
              email: {
                [Op.iLike]: value
              }
            }
          })
          .then((data) => {
            if(data.length > 0) {
              next('email sudah ada')
            }
            else next()
          })
          .catch((err) => next(err))
        }
      }
    },
    password: DataTypes.STRING,
    studentId: DataTypes.INTEGER
  }, {
    sequelize, 
    hooks: {
      beforeCreate: capitalizeParent,
      beforeUpdate: capitalizeParent
    }
  })
  Parent.associate = function(models) {
    // associations can be defined here
    Parent.belongsTo(models.Student, { foreignKey: 'id' })
  };
  return Parent;
};