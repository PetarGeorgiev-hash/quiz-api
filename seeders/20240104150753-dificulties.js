'use strict';
const { uuid } = require('uuidv4');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const existingCategories = await queryInterface.sequelize.query(
      'SELECT * FROM "Difficulties";'
    );

    if (existingCategories[0].length === 0) {
      const difficulties = ['easy', 'medium', 'hard'];
      for (const difficultiesName of difficulties) {
        await queryInterface.bulkInsert('Difficulties', [
          {
            id: uuid(),
            level: difficultiesName,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      }
    } else {
      console.log('Difficulties table already has data. Skipping seeding.');
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Difficulties', null, {});
  },
};
