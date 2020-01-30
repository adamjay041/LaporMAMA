const router = require('express').Router()
const StudentController = require('../controllers/studentController.js')
const ParentController = require('../controllers/parentController.js')

router.get('/', StudentController.findStudents)

router.get('/admission', ParentController.renderListAdmission)

router.post('/addstudent', ParentController.addStudent)

router.get('/student/:id/edit', StudentController.renderAddMapel)
router.post('/student/:id/edit', StudentController.addMapel)

router.get('/editstudent/:id/edit', ParentController.renderEditStudent)
router.post('/editstudent/:id/edit', ParentController.editStudent)

router.get('/destroystudent/:id/delete', ParentController.destroyStudent)

module.exports = router