const express = require('express')
const categoryRouter = require('./category')
const difficultyRouter = require('./dificulties')
const questionRouter = require('./questions')
const app = express()
const port = 3000

app.use('/category', categoryRouter)

app.use('/difficulty', difficultyRouter)

app.use('/questions', questionRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}
)