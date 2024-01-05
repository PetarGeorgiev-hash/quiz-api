'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      question: {
        type: Sequelize.STRING
      },
      incorrect_answers: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      correct_answer: {
        type: Sequelize.STRING
      },
      categoryId: {
        type: Sequelize.UUID,
        references: {
          model: 'Categories',
          key: "id"
        }
      },
      difficultyId: {
        type: Sequelize.UUID,
        references: {
          model: 'Difficulties',
          key: "id"
        }
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Questions');
  }
};