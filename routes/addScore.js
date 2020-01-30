const router = require('express').Router()
const ConjunctionController = require('../controllers/Conjunction')

router.get('/addScore',ConjunctionController.renderAddScore)
router.get('/addScore/:id',ConjunctionController.renderLesson)
router.post('/addScore/:id',ConjunctionController.addScore)

module.exports = router