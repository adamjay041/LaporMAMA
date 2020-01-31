const {Conjunction, Lesson ,Student, Parent} = require('../models')
const nodemailer = require('nodemailer')

class ScoreController {
    static renderAddScore (req,res) {
        Student.findAll({include : [Lesson]})
            .then(data => {
                res.render('addScore',{data})
            })

    }
    static addScore(req,res) {
        Conjunction.update({Nilai : req.body.nilai},{where : {
            LessonId : req.body.lesson,
            StudentId : req.params.id,
        }, individualHooks:true})
        .then(_=>{
            return Conjunction.findAll({
                where: {
                    StudentId: req.params.id
                }
            })
        })
        .then((data) => {
            let totalScore = 0
            for(let key of data) {
                totalScore+=key.Nilai
            }
            let avgNilai = Math.round(totalScore/data.length)
            return Student.update({
                totalScore: avgNilai
            }, {
                where: {
                    id: req.params.id
                }
            })
        })
        .then(() => {
            return Parent.findOne({
                include: [Student],
                where: {
                    studentId: req.params.id
                }
            })
        })
        .then((data) => {
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'andrumahardi77@gmail.com',
                    pass: 'N0v6991m4h412d1'
                }
            });
            
            var mailOptions = {
                from: 'andrumahardi77@gmail.com',
                to: `${data.email}`,
                subject: `Laporan nilai rata-rata anak Ibu ${data.name}`,
                text: `Nilai ${data.Student.StudentName} saat ini ${data.Student.totalScore}`
            };
            
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    res.send(error);
                } else {
                    res.send('Email sent: ' + info.response);
                }
            });
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
    }
    static renderLesson(req,res){
        Student.findOne({include : [Lesson]},
            {where : {id : req.params.id}})
            .then(data => {
                res.render('formAddScore',{data})
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = ScoreController