const { Conjunction } = require('../models')

function capitalize(user, options) {
    user.StudentName = user.StudentName.toUpperCase()
    // user.totalScore = Conjunction.Nilai
}

module.exports = capitalize