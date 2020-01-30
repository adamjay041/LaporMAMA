const { Lesson, Student ,Conjunction} = require('../models')
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
            res.render('students.ejs' ,{data : student , lesson : data})
        })
        .catch((err) => res.send(err))
    }

    static addStudent(req, res) {
        // console.log(req.body)
        Student.create({
            StudentName: req.body.StudentName
        }, {
            individualHooks: true
        })
        .then(() => {
            return Student.findOne({
                where : {StudentName : {[Op.iLike] : req.body.StudentName}}
            })
        })
        .then(data => {
            let id = data.id
            if(typeof req.body.lesson === 'string' ){
                req.body.lesson = [req.body.lesson]
            }
            let arr = []
            req.body.lesson.forEach(el => {
                let obj ={ 
                    LessonId : +el,
                    StudentId : id
                }
                arr.push(obj)
            })
            return Conjunction.bulkCreate(arr)
        })
        .then(_ => {
            res.redirect('/')
        })
        
        .catch((err) => {
            res.send(err)
            console.log(err)
        })
    }

    static renderEditStudent(req, res) {
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
            res.render('editpage.ejs', {data : id , lesson : data})
        })
        .catch((err) => res.send(err))
    }

    static editStudent(req, res) {
        Student.update({
            StudentName: req.body.StudentName
        }, {
            where: {
                id: req.params.id
            },
            individualHooks: true
        })
        .then(() => {
            return Student.findOne({
                where : {StudentName : {[Op.iLike] : req.body.StudentName}}
            })
        })
        .then(data => {
            let id = data.id
            if(typeof req.body.lesson === 'string' ){
                req.body.lesson = [req.body.lesson]
            }
            let arr = []
            req.body.lesson.forEach(el => {
                let obj ={ 
                    LessonId : +el,
                    StudentId : id
                }
                arr.push(obj)
            })
            Conjunction.destroy({where : {id : req.params.id}})
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