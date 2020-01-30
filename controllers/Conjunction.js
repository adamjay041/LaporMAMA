const {Conjunction, Lesson ,Student} = require('../models')

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
            let avgNilai = totalScore/data.length
            return Student.update({
                totalScore: avgNilai
            }, {
                where: {
                    id: req.params.id
                }
            })
        })
        .then(() => res.redirect('/'))
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