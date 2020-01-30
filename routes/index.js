const express = require('express').Router()
const router = express
const Lesson = require('./leson')
const Student = require('./appRouter')

router.use(Student)
router.use(Lesson)


module.exports = router
