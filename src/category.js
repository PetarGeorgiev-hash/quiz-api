const express = require('express')
const router = express.Router();
const Category = require('../utils/category-utils')




router.use((req, res, next) => {
    next()
})


router.get('/', async (req, res) => {
    const categories = await Category.listAllCategory()
    res.send(categories)
})


module.exports = router