const express=require('express')
const { createChat, Chats } = require('../controllers/chatController')
const { createOrder,verifyPayment } = require('../controllers/paymentController')
const { registerStudent,approveStudent, updateStudent, loginStudent, getStudent, courseStudent } = require('../controllers/studentController')
const { loginTeacher } = require('../controllers/teacherController')
const {   addTask, getTasks, deleteTask, StudentTask } = require('../controllers/taskController')




const multer = require('multer');


const {upload, cloudinary, storage} = require('../utils/fileStorage');
const router= express.Router()
// const {getUser,
//     registerUser,
//     loginUser,
//     refreshFunction,
//     logoutUser,
//     acceptStudent
// }=require('../controllers/userController')
const {protect}=require('../middleware/authMiddleware')

router.post('/',registerStudent)
router.post('/login',loginStudent)
router.get('/coursestudent',courseStudent)

// router.post('/refresh',refreshFunction)
// router.post('/logout',protect,logoutUser)
// router.patch('/acceptstudent',acceptStudent)

router.post('/loginteacher',loginTeacher)
router.get('/getstudent/:studentId',getStudent)
router.patch('/approvestudent',approveStudent)




router.post('/razorpay',createOrder)
router.post('/verifypayment',verifyPayment)

router.post('/addtask',upload.array('tasks'),addTask)
router.get('/studenttask/:courseId',StudentTask)
router.get('/gettasks/:teacherId',getTasks)
router.delete('/deletetask/:taskId',deleteTask)

//chat routes

router.post('/createchat',createChat)
router.get('/chats/:courseId',Chats)


module.exports=router

