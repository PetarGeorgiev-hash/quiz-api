const express = require('express')
const router = express.Router()

const Questions = require('../utils/questions-utils')

router.use((req, res, next) => {
    next();
})

router.get('/', (req, res) => {

    Questions.listAllQuestions(req.query).then(questions => {
        if (questions.length === 0)
            res.status(400).send({ error: 'Bad request' })
        else
            res.send(questions);

    }).catch(error => {
        res.status(400).send({ error })
    })

})

module.exports = router