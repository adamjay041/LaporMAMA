const router = require('express').Router()
const StudentController = require('../controllers/studentController.js')
const ParentController = require('../controllers/parentController.js')

router.get('/', StudentController.findStudents)

router.get('/parentdata', ParentController.findStudents)

router.post('/addstudent', ParentController.addStudent)

router.get('/editstudent/:id/edit', ParentController.renderEditStudent)
router.post('/editstudent/:id/edit', ParentController.editStudent)

router.get('/destroystudent/:id/delete', ParentController.destroyStudent)

module.exports = router