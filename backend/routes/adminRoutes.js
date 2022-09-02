const express=require('express')
const router= express.Router()
const {getAdmin,
    registerAdmin,
    loginAdmin
}=require('../controllers/adminController')
const {adminprotect}=require('../middleware/authMiddleware')

router.post('/signin',registerAdmin)
router.post('/adminlogin',loginAdmin)
router.get('/admin',adminprotect,getAdmin)


// router.route('/').get(getAdmins).post(setAdmin)

module.exports=router

