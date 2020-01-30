const { Lecture , Parent} = require('../models')

class Contreoller {
    static loginParent(req,res) {
        Parent.findOne({where : {
            email : req.body.email
        }})
        .then(data => {
            if(data){
                return Parent.findOne({where : {email : req.body.email,password : req.body.password}})
            }else{
                res.redirect('/login')
            }
        })
        .then(data => {
            if(data){
                req.session.login =true,
                req.session.role = 'parent'
                res.redirect('/')
            }else{
                res.redirect('/login')
            }
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
    }
    static loginPLecture(req,res) {
        Lecture.findOne({where : {
            Email : req.body.email
        }})
        .then(data => {
            if(data){
                return Lecture.findOne({where : {Email : req.body.email,Password : req.body.password}})
            }else{
                res.redirect('/login')
            }
        })
        .then(data => {
            if(data){
                req.session.login =true,
                req.session.role = 'teacher'
                res.redirect('/')
            }else{
                res.redirect('/login')
            }
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
    }
}

module.exports = Contreoller