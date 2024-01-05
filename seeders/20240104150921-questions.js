const { uuid } = require('uuidv4');
const questionsObj = require('./questions.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    for (const question of questionsObj.results) {
      const [category] = await queryInterface.sequelize.query(`SELECT id FROM "Categories" WHERE name = '${question.category}'`);
      const [difficulty] = await queryInterface.sequelize.query(`SELECT id FROM "Difficulties" WHERE level = '${question.difficulty}'`);


      const selectedQuestion = await queryInterface.sequelize.query(`SELECT * FROM "Questions" WHERE "difficultyId" = '${difficulty[0].id}' AND "categoryId" = '${category[0].id}'`);
      console.log(selectedQuestion);

      if (selectedQuestion[0].length < 20) {
        const insertQuestion = {
          id: uuid(),
          question: question.question,
          incorrect_answers: question.incorrect_answers,
          correct_answer: question.correct_answer,
          categoryId: category[0].id,
          difficultyId: difficulty[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        await queryInterface.bulkInsert('Questions', [insertQuestion]);
      } else {
        console.log('There is already questions with that category and difficulty');
      }

    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
