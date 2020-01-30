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
    return queryInterface.bulkInsert('Lessons', [
    {
      NameLesson: 'Matematika',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      NameLesson: 'IPA',
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      NameLesson: 'IPS',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      NameLesson: 'Bahasa Inggris',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      NameLesson: 'Bahasa Indonesia',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
