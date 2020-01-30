class Auth {
    static isLogin(req,res,next){
        console.log(req.session)
        if(!req.session.login){
            res.redirect('/login')
        }else{
            next()
        }
    }
    static isTeacher (req,res,next){
        if(req.session.role != 'teacher'){
            res.redirect('/login')
        }else{
            next()
        }
    }
    static isParent (req,res,next){
        if(req.session.role != 'parent'){
            res.redirect('/loginlecture')
        }else{
            next()
        }
    }
}

module.exports = Auth