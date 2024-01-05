const { Sequelize } = require('sequelize');
const CategoryModel = require('../models/categories.js');
const QuestionModel = require('../models/questions.js')
const DifficultyModel = require('../models/difficulties.js')

const sequelize = new Sequelize('quiz2', 'postgres', 'express', {
    host: 'localhost',
    dialect: 'postgres',
    port: 8000,
});

const Category = CategoryModel(sequelize);
const Question = QuestionModel(sequelize);
const Difficulty = DifficultyModel(sequelize);

const connectToDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connectToDb()

module.exports = { Category, Question, Difficulty }
