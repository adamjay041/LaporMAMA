const express = require('express').Router()
const router = express
const ControllerLesson = require('../controllers/Lesson')

router.get('/lesson',ControllerLesson.findall)
router.get('/addLesson',ControllerLesson.renderAdd)
router.post('/addLesson',ControllerLesson.addLesson)
router.get('/:id/delete',ControllerLesson.delete)

module.exports = router