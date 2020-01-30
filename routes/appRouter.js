const router = require('express').Router()
const StudentController = require('../controllers/studentController.js')

router.get('/', StudentController.findStudents)

router.post('/student', StudentController.addStudent)

router.get('/student/:id/edit', StudentController.renderEditStudent)
router.post('/student/:id/edit', StudentController.editStudent)

router.get('/student/:id/delete', StudentController.destroyStudent)

router.get('/sendEmail', StudentController.sendEmail)

module.exports = router