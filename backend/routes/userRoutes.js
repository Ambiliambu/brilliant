const express=require('express')
const router= express.Router()
const {getUser,
    registerUser,
    loginUser,
    refreshFunction,
    logoutUser,
    registerStudent
}=require('../controllers/userController')
const {protect}=require('../middleware/authMiddleware')

router.post('/',registerUser)
router.post('/refresh',refreshFunction)
router.post('/login',loginUser)
router.post('/logout',protect,logoutUser)

router.get('/user',protect,getUser)
router.post('/student',registerStudent)


// router.route('/').get(getUsers).post(setUser)

module.exports=router

