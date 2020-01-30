const { Lesson, Student } = require('../models')
const nodemailer = require('nodemailer')

class StudentController{
    static findStudents(req, res) {
        Student.findAll()
        .then((data) => {
            res.render('students.ejs', { data })
        })
        .catch((err) => res.send(err))
    }

    static addStudent(req, res) {
        Student.create({
            StudentName: req.body.StudentName
        }, {
            individualHooks: true
        })
        .then(() => res.redirect('/'))
        .catch((err) => res.send(err))
    }

    static renderEditStudent(req, res) {
        Student.findOne({
            where: {
                id: req.params.id
            }
        })
        .then((data) => {
            res.render('editpage.ejs', { data })
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
        .then(() => res.redirect('/'))
        .catch((err) => res.send(err))
    }

    static destroyStudent(req, res) {
        Student.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => res.redirect('/'))
        .catch((err) => res.send(err))
    }

    static sendEmail(req, res) {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'andrumahardi77@gmail.com',
                pass: 'N0v6991m4h412d1'
            }
        });
        
        var mailOptions = {
            from: 'andrumahardi77@gmail.com',
            to: 'andrumahardi77@gmail.com',
            subject: 'Sending Email using Node.js',
            text: 'success!'
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                res.send(error);
            } else {
                res.send('Email sent: ' + info.response);
            }
        });
    }
}

module.exports = StudentController