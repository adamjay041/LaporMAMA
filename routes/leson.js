const express = require('express').Router()
const router = express
const ControllerLesson = require('../controllers/Lesson')
const Controller = require('../controllers/login')
router.get('/lesson',ControllerLesson.findall)
router.get('/addLesson',ControllerLesson.renderAdd)
router.post('/addLesson',ControllerLesson.addLesson)
router.get('/:id/delete',ControllerLesson.delete)
router.post('/login',Controller.loginPLecture)
router.post('/login',Controller.loginParent)
// router.get('/logout',Controller.logout)

module.exports = router