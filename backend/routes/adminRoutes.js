const express=require('express')
const router= express.Router()
const {getAdmin,
    registerAdmin,
    loginAdmin
}=require('../controllers/adminController')
const { addCourse, getCourses ,deleteCourse,getCourse ,editCourse, acessCourse, accessCourse} = require('../controllers/courseController')
const { addSchedule, getSchedules, deleteSchedule, getSchedule, accessSchedule } = require('../controllers/scheduleController')
const { getStudents, updateStudent } = require('../controllers/studentController')
const { addSubject, getSubjects, deleteSubject, getSubject } = require('../controllers/subjectController')
const { addTeacher, getTeachers, getTeacher, deleteTeacher, editTeacher, courseTeacher, updateTeacher } = require('../controllers/teacherController')
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
router.get('/accesscourse',accessCourse)



//teacher managent

router.post('/addteacher',addTeacher)
router.get('/getteachers',getTeachers)
router.get('/courseteacher',courseTeacher)
router.delete('/deleteteacher',deleteTeacher)
router.get('/editteacher/:teacherId',getTeacher)
router.patch('/editteacher/:teacherId',editTeacher)


//subject management
router.post('/addsubject',addSubject)
router.get('/getsubjects',getSubjects)
router.delete('/deletesubject',deleteSubject)
// router.get('/editcourse/:courseId',getSubject )

router.post('/addschedule',addSchedule)
router.get('/getschedules',getSchedules)
router.delete('/deleteschedule',deleteSchedule)
router.get('/getschedule/:courseId',getSchedule)
router.get('/accessschedule',accessSchedule)



router.get('/getstudents',getStudents)
router.patch('/updatestudent/:Id', updateStudent)
router.patch('/updateteacher/:Id', updateTeacher)




// router.route('/').get(getAdmins).post(setAdmin)

module.exports=router

