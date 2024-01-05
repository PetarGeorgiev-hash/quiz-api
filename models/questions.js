'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Questions.init({
    id: {
      primaryKey: true,
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.DataTypes.UUID
    },
    question: Sequelize.DataTypes.STRING,
    incorrect_answers: Sequelize.DataTypes.ARRAY(Sequelize.DataTypes.STRING),
    correct_answer: Sequelize.DataTypes.STRING,
    difficultyId: Sequelize.DataTypes.UUID,
    categoryId: Sequelize.DataTypes.UUID,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    sequelize,
    modelName: 'Questions',
  });
  return Questions;
};