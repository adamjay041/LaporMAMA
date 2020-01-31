const { Lecture , Parent} = require('../models')

class Contreoller {
    // static loginStudent(req,res) {

    // }

    static login(req,res) {
        if(req.body.role == 'teacher') {
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
        else if(req.body.role == 'student') {
            console.log(req.body.role)
            Parent.findOne({where : {
            email : req.body.email
            }})
            .then(data => {
                if(data){
                    return Parent.findOne({where : {email : req.body.email, password : req.body.password}})
                }else{
                    res.redirect('/login')
                }
            })
            .then(data => {
                if(data){
                    req.session.login =true,
                    req.session.role = 'student'
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

    static logout(req, res) {
        req.session.login = false,
        req.session.role = ''
        res.redirect('/')
    }
}

module.exports = Contreoller