const express = require('express').Router()
const router = express
const ControllerLesson = require('../controllers/Lesson')
const Controller = require('../controllers/login')
const Auth = require('../middlewares/auth.js')

router.get('/lesson', Auth.isTeacher, ControllerLesson.findall)
router.get('/addLesson', Auth.isTeacher, ControllerLesson.renderAdd)
router.post('/addLesson', Auth.isTeacher, ControllerLesson.addLesson)
router.get('/:id/delete', Auth.isTeacher, ControllerLesson.delete)
router.post('/login',Controller.login)
router.get('/logout',Controller.logout)

module.exports = router