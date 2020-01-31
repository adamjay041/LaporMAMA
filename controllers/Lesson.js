const { Lesson , Student} = require('../models')

class Controller  {
    static findall (req,res){
        Lesson.findAll({include : [Student]})
            .then(data => {
                res.render('listLesson',{data})
                // res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }
    static renderAdd(req,res){
        res.render('formAdd.ejs' , {err :''})
    }
    static addLesson (req,res) {
        let data  = {NameLesson : req.body.name}
        Lesson.create(data)
            .then(data =>{
                res.redirect('/lesson')
            })
            .catch(err => {
                res.send(data)
            })
        
    }

    static delete (req,res) { 
        Lesson.destroy({where : {id : req.params.id}})
            .then(data => {
                res.redirect('/lesson')
            })
            .catch(err => {
                res.send('uwu')
            })
    }

}

module.exports = Controller