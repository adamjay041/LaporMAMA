const router = require('express').Router()
const ConjunctionController = require('../controllers/Conjunction')
const Auth = require('../middlewares/auth')

router.get('/addScore',Auth.isLogin,ConjunctionController.renderAddScore)
router.get('/addScore/:id',Auth.isTeacher,ConjunctionController.renderLesson)
router.post('/addScore/:id',Auth.isTeacher,ConjunctionController.addScore)

module.exports = router