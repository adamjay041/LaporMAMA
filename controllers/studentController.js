const { Student, Parent } = require('../models')
const nodemailer = require('nodemailer')
const { Op } = require('sequelize')

class StudentController{
    static findStudents(req, res) {
        Student.findAll({
            include: [Parent]
        })
        .then((data) => {
            res.render('students.ejs', { data })
        })
        .catch((err) => {
            res.send(err)})
    }
}

module.exports = StudentController