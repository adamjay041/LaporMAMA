const express = require('express').Router()
const router = express
const Lesson = require('./leson')
const Student = require('./appRouter')
const Score = require('./addScore')

router.use(Student)
router.use(Lesson)
router.use(Score)

router.get('/login', (req, res) => {
    res.render('login.ejs')
})


module.exports = router
