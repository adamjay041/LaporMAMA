'use strict';
const capitalizeParent = require('../helpers/ParentModelHelper.js')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Parent extends Model{}
  Parent.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
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