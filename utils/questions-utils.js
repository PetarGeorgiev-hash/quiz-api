const { Question, Difficulty, Category } = require('../db/db')
const { isUuid } = require('uuidv4');


const listAllQuestions = (query) => {
    return new Promise(async (resolve, reject) => {
        if (query) {
            const { category, dificulty } = query

            if (isUuid(category) && isUuid(dificulty)) {
                try {
                    const categoryCount = await Category.count({ where: { id: category } })
                    const dificultyCount = await Difficulty.count({ where: { id: dificulty } })

                    if (categoryCount === 0 || dificultyCount === 0) {
                        reject(categoryCount === 0 ? "0 category with this id" : "0 category with this difficulty id")
                    }

                    const questions = await Question.findAll({
                        where: {
                            categoryId: category,
                            difficultyId: dificulty
                        }
                    })

                    questions.forEach(question => {
                        question.incorrect_answers.sort(() => Math.random() - 0.5)
                    })
                    questions.sort(() => Math.random() - 0.5)
                    resolve(questions)
                } catch (e) {
                    reject('Error')
                }

            }
        }
        reject('Invalid UUID')
    });

}




module.exports = {
    listAllQuestions
}