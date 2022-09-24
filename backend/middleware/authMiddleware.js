const jwt=require('jsonwebtoken')
const  asynchandler=require('express-async-handler')
const {User}=require('../models/userModel')
const {Admin} =require('../models/adminModel')

const protect =asynchandler(async(req,res,next)=>{
    let token

   if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    try{
        //get token from header
        token=req.headers.authorization.split(' ')[1]

        //verify token
        const decoded=jwt.verify(token,process.env.JWT_SECRET)

        //get user from the token
        req.user=await User.findById(decoded.id).select('-password')

        next()

    }catch(error){
      console.log(error);
      res.status(401)
      throw new Error('Not authorized/not allowed') 
    }
   } 
   if(!token){
    res.status(401)
    throw new Error('Not authorized,no token ')
   }
})




const adminprotect =asynchandler(async(req,res,next)=>{
  let token

 if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
  try{
      //get token from header
      token=req.headers.authorization.split(' ')[1]
      
      //verify token
      const decoded=jwt.verify(token,process.env.JWT_SECRET2)
      console.log("decod",decoded);
      //get user from the token
      req.admin=await Admin.findById(decoded.id).select('-password')
       console.log("req",req.admin)
      next()

  }catch(error){
    console.log(error);
    res.status(401)
    throw new Error('Not authorized') 
  }
 } 
 if(!token){
  res.status(401)
  throw new Error('Not authorized,no token ')
 }
})
module.exports={protect,adminprotect}