'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Conjunctions', [{
    LessonId : 1,
    StudentId : 2,
    Nilai : 80,
    createdAt : new Date(),
    updatedAt : new Date()
  }], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Conjunctions', null, {});
    */
   return queryInterface.bulkDelete('Conjunctions', null, {});
  }
};
