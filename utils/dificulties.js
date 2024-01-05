const { Difficulty } = require('../db/db')

const listAllDificulties = async () => {
    // to do check how to sort in the db query
    const difficulties = await Difficulty.findAll();
    return difficulties.sort((a, b) => a.level.localeCompare(b.level));
}


module.exports = { listAllDificulties }