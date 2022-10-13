const express=require('express')
const { createOrder,verifyPayment } = require('../controllers/paymentController')
const { registerStudent,approveStudent, updateStudent } = require('../controllers/studentController')
const { loginTeacher,  addTask, getTask, getTasks } = require('../controllers/teacherController')
const router= express.Router()
const {getUser,
    registerUser,
    loginUser,
    refreshFunction,
    logoutUser,
    acceptStudent
}=require('../controllers/userController')
const {protect}=require('../middleware/authMiddleware')

router.post('/',registerUser)
router.post('/refresh',refreshFunction)
router.post('/login',loginUser)
router.post('/logout',protect,logoutUser)
router.post('/loginteacher',loginTeacher)

router.get('/user',protect,getUser)
router.patch('/acceptstudent',acceptStudent)

router.post('/student',registerStudent)
router.patch('/approvestudent',approveStudent)



// router.route('/').get(getUsers).post(setUser)

router.post('/razorpay',createOrder)
router.post('/verifypayment',verifyPayment)


router.post('/addtask',addTask)
router.get('/gettask/:teacherId',getTask)
router.get('/gettasks/:course',getTasks)


module.exports=router

