const {Conjunction, Lesson ,Student} = require('../models')

class ScoreController {
    static find(req,res) {
        let filter;
        Lesson.findAll({
            include : [Student]
        })
            .then(data => {
                // console.log(data[0].dataValues.Students)
                res.render('AddScore',{data})
                // res.send(data)
            })
    }
    // static update(req,res) {
    //     let lesson ;
    //     Conjunction.findOne({where : {lesson : req.body.lesson}})
    //     .then(data => {
    //         lesson = data
    //     })
    // }
    // static findOne (req,res){
    //     Lesson.findOne({
    //         include : [Student],
    //         where: {id : req.body.NameLesson}
    //     })
    //     .then(data => {
    //         res.redirect('/addScore')
    //     })
    // }
}

module.exports = ScoreController