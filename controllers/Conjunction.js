const {Conjunction, Lesson ,Student} = require('../models')

class ScoreController {
    static renderAddScore (req,res) {
        Student.findAll({include : [Lesson]})
            .then(data => {
                res.render('addScore',{data})
                // res.send(data)
            })

    }
    static addScore(req,res) {
        Conjunction.update({Nilai : req.body.nilai},{where : {
            LessonId : req.body.lesson,
            StudentId : req.params.id
        }})
        .then(_=>{
            res.redirect('/')
        })
        .catch(err => {
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