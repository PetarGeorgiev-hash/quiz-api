const { Category } = require('../db/db')

const listAllCategory = async () => {
    // to do check how to sort in the db query
    const categories = await Category.findAll()
    return categories.sort((a, b) => a.name.localeCompare(b.name));
};

module.exports = {
    listAllCategory
}