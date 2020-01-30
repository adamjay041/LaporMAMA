const express = require('express').Router()
const router = express
const Lesson = require('./leson')
const Student = require('./appRouter')
const Score = require('./lecture')
router.use(Student)
router.use(Lesson)
router.use(Score)


module.exports = router
