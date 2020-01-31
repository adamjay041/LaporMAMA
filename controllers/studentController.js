const { Lesson, Student, Conjunction} = require('../models')
const nodemailer = require('nodemailer')
const { Op } = require('sequelize')

class StudentController{
    static findStudents(req, res) {
        let student ;
        Student.findAll()
        .then((data) => {
            student = data
            return Lesson.findAll()
        })
        .then(data => {
            res.render('student.ejs' ,{data : student , lesson : data})
        })
        .catch((err) => res.send(err))
    }

    static renderAddMapel(req, res) {
        let id ;
        Student.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((data) => {
            id = data
            return Lesson.findAll()
        })
        .then(data => {
            res.render('addMapel.ejs', {data : id , lesson : data})
        })
        .catch((err) => res.send(err))
    }

    static addMapel(req, res) {
        Conjunction.destroy({
            where: {
                StudentId: req.params.id
            }
        })
        .then(() => {
            let arr = []
            for (let key of req.body.lesson) {
                let obj = {
                    LessonId: key,
                    StudentId: req.params.id
                }
                arr.push(obj)
            }
            return Conjunction.bulkCreate(arr)
        })
        .then(() => res.redirect('/'))
        .catch((err) => res.send(err))
    }

    static destroyStudent(req, res) {
        Student.destroy({
            where: {
                id: req.params.id
            }

        })
        .catch((err) => {
            res.send(err)})
    }
}

module.exports = StudentController