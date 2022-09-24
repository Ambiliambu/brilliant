const express=require('express')
const router= express.Router()
const {getAdmin,
    registerAdmin,
    loginAdmin
}=require('../controllers/adminController')
const { addCourse, getCourses ,deleteCourse,getCourse ,editCourse} = require('../controllers/courseController')
const { addSubject, getSubjects, deleteSubject, getSubject } = require('../controllers/subjectController')
const { addTeacher, getTeachers, getTeacher, deleteTeacher, editTeacher } = require('../controllers/teacherController')
const {adminprotect}=require('../middleware/authMiddleware')

router.post('/signin',registerAdmin)
router.post('/adminlogin',loginAdmin)
router.get('/admin',adminprotect,getAdmin)

//course management
router.post('/addcourse',addCourse)
router.get('/getcourses',getCourses)
router.delete('/deletecourse',deleteCourse)
router.get('/editcourse/:courseId',getCourse )
router.patch('/editcourse/:courseId',editCourse)

//teacher managent

router.post('/addteacher',addTeacher)
router.get('/getteachers',getTeachers)
router.delete('/deleteteacher',deleteTeacher)
router.get('/editteacher/:teacherId',getTeacher)
router.patch('/editteacher/:teacherId',editTeacher)


//subject management
router.post('/addsubject',addSubject)
router.get('/getsubjects',getSubjects)
router.delete('/deletesubject',deleteSubject)
// router.get('/editcourse/:courseId',getSubject )



// router.route('/').get(getAdmins).post(setAdmin)

module.exports=router

