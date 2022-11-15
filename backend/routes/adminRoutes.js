const express=require('express')
const router= express.Router()
const {getAdmin,
    registerAdmin,
    loginAdmin
}=require('../controllers/adminController')
const { addCourse, getCourses ,deleteCourse,getCourse ,editCourse, acessCourse, accessCourse} = require('../controllers/courseController')
const { addSchedule, getSchedules, deleteSchedule, getSchedule, accessSchedule, EditSchedule, editSchedule, teacherSchedule } = require('../controllers/scheduleController')
const { getStudents, blockAndUnblockStudent } = require('../controllers/studentController')
const { addSubject, getSubjects, deleteSubject, getSubject, courseSubjects } = require('../controllers/subjectController')
const { addTeacher, getTeachers, getTeacher, deleteTeacher, editTeacher, courseTeacher, blockAndUnblockTeacher } = require('../controllers/teacherController')
const {adminprotect}=require('../middleware/authMiddleware')

router.post('/signin',registerAdmin)
router.post('/adminlogin',loginAdmin)
router.get('/admin',adminprotect,getAdmin)

//course management
router.post('/addcourse',addCourse)
router.get('/getcourses',getCourses)
router.delete('/deletecourse',deleteCourse)
router.get('/getcourse/:courseId',getCourse )
router.patch('/editcourse/:courseId',editCourse)
router.get('/accesscourse',accessCourse)



//teacher managent

router.post('/addteacher',addTeacher)
router.get('/getteachers',getTeachers)
router.get('/courseteacher/:courseId',courseTeacher)
router.delete('/deleteteacher',deleteTeacher)
router.get('/editteacher/:teacherId',getTeacher)
router.patch('/editteacher/:teacherId',editTeacher)
router.get('/getteacher/:teacherId',getTeacher)

//subject management
router.post('/addsubject',addSubject)
router.get('/getsubjects',getSubjects)
router.get('/coursesubjects/:courseId',courseSubjects)
router.delete('/deletesubject',deleteSubject)
// router.get('/editcourse/:courseId',getSubject )

router.post('/addschedule',addSchedule)
router.get('/getschedules',getSchedules)
router.delete('/deleteschedule/:courseId',deleteSchedule)
router.get('/getschedule/:courseId',getSchedule)
router.get('/teacherschedule/:teacherId',teacherSchedule)



router.get('/getstudents',getStudents)
router.patch('/blockandunblockstudent/:Id',blockAndUnblockStudent)

router.patch('/blockandunblockteacher/:Id', blockAndUnblockTeacher)




// router.route('/').get(getAdmins).post(setAdmin)

module.exports=router

