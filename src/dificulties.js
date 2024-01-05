const express = require('express')
const router = express.Router()
const Difficulties = require('../utils/dificulties')

router.use((req, res, next) => {
    next()
})

router.get('/', async (req, res) => {
    const difficulties = await Difficulties.listAllDificulties();
    res.send(difficulties)
})

module.exports = router