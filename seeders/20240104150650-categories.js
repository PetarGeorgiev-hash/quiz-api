'use strict';
const { v4: uuidv4 } = require('uuid');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const existingCategories = await queryInterface.sequelize.query(
      'SELECT * FROM "Categories";'
    );

    if (existingCategories[0].length === 0) {
      const categories = ['Sports', 'Animals', 'Vehicles'];
      for (const categoryName of categories) {
        await queryInterface.bulkInsert('Categories', [
          {
            id: uuidv4(),
            name: categoryName,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      }
    } else {
      console.log('Categories table already has data. Skipping seeding.');
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};

