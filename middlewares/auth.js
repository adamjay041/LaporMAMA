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
        // if(req.session.login){
        //     if(req.session.role != 'teacher'){
        //         res.redirect('/login')
        //     }
        // }else{
        //     next()
        // }
        if(req.session.role != 'teacher'){
            res.redirect('/login')
        }else{
            next()
        }
    }
    static isStudent (req,res,next){
        // if(!req.session.login){
        //     if(req.session.role != 'student'){
        //         res.redirect('/login')
        //     }
        // }else{
        //     next()
        // }
        if(req.session.role != 'student'){
            res.redirect('/login')
        }else{
            next()
        }
    }
}

module.exports = Auth