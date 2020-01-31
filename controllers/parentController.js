const { Student, Parent, Conjunction } = require('../models')
const nodemailer = require('nodemailer')
const { Op } = require('sequelize')

class ParentController{
    static renderListAdmission(req, res) {
        Student.findAll({
            include: [Parent]
        })
        .then((data) => {
            res.render('admission.ejs', { data, err: req.query.q })
        })
        .catch((err) => {res.send(err)})
    }

    static addStudent(req, res) {
        let studentId = ''
        Parent.create({
            name: req.body.parentName,
            email: req.body.parentEmail,
            password: req.body.parentPassword,
        }, {
            individualHooks: true
        })
        .then(() => {
            return Student.create({
                StudentName: req.body.studentName
            }, {
                individualHooks: true
            })
        })
        .then(() => {
            return Student.findOne({
                where: {
                    StudentName: {
                        [Op.iLike]: req.body.studentName
                    } 
                }
            })
        })
        .then((data) => {
            studentId = data.id
            return Parent.update({
                studentId: data.id
            }, {
                where: {
                    name: {
                        [Op.iLike]: req.body.parentName
                    }
                }
            })
        })
        .then(() => {
            return Conjunction.create({
                StudentId: studentId
            })
        })
        .then(() => res.redirect('/admission'))
        .catch((err) => {
            let error = err.errors[0].message
            res.redirect(`/admission?q=${error}`)
        })
    }

    static renderEditStudent(req, res) {
        Student.findOne({
            include: [Parent],
            where: {
                id: req.params.id
            }
        })
        .then((data) => {
            // res.send(data)
            res.render('editpage.ejs', { data })
        })
        .catch((err) => res.send(err))
    }

    static editStudent(req, res) {
        Parent.update({
            name: req.body.parentName,
            email: req.body.parentEmail,
            password: req.body.parentPassword
        }, {
            where: {
                studentId: req.params.id
            },
            individualHooks: true
        })
        .then(() => {
            return Student.update({
                StudentName: req.body.StudentName
            }, {
                where: {
                    id: req.params.id
                },
                individualHooks: true
            })
        })
        .then(() => res.redirect('/admission'))
        .catch(() => {
            let message = `email sama seperti sebelumnya`
            res.redirect(`/admission?q=${message}`)
        })
    }

    static destroyStudent(req, res) {
        Student.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            Parent.destroy({
                where: {
                    studentId: req.params.id
                }
            })
        })
        .then(() => res.redirect('/admission'))
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

module.exports = ParentController