const { Lesson } = require('../models')

class Controller  {
    static findall (req,res){
        Lesson.findAll()
            .then(data => {
                res.render('listLesson',{data})
            })
            .catch(err => {
                res.send(err)
            })
    }
    static renderAdd(req,res){
        res.render('formAdd.ejs' , {err :''})
    }
    static renderUpdate(req,res){
        res.render('formUpdate' ,{id : req.params.id})
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
    static update(req,res) { 
        let data  = {NameLesson : req.body.name}
        Lesson.update(data,{where : {id :req.params.id}})
            .then(data1 => {
                res.redirect('/lesson')
            })
            .catch(err => {
                res.send(err)
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