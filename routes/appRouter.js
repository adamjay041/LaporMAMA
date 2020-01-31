const router = require('express').Router()
const StudentController = require('../controllers/studentController.js')
const ParentController = require('../controllers/parentController.js')
const Auth = require('../middlewares/auth')
router.get('/', StudentController.findStudents)

router.get('/admission',Auth.isTeacher ,ParentController.renderListAdmission)

router.post('/addstudent', Auth.isTeacher,ParentController.addStudent)

router.get('/student/:id/edit',Auth.isStudent, StudentController.renderAddMapel)
router.post('/student/:id/edit',Auth.isStudent ,StudentController.addMapel)

router.get('/editstudent/:id/edit', Auth.isTeacher,ParentController.renderEditStudent)
router.post('/editstudent/:id/edit', Auth.isTeacher,ParentController.editStudent)

router.get('/destroystudent/:id/delete',Auth.isTeacher ,ParentController.destroyStudent)

module.exports = router