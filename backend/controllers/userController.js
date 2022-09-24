const asynchandler=require('express-async-handler')
const {User}=require('../models/userModel')
const {generateAccessToken,generateRefreshToken} =require('../utils/generateToken')
const bcrypt=require('bcryptjs')
const jwt =require('jsonwebtoken')

// const Student=require('../models/userModel')


//register a user
const registerUser=asynchandler(async(req,res)=>{
    const {name,email,password,isStudent}=req.body
     
    if(!name || !email || !password){
      res.status(400)
      throw new Error('Please add all field')
    }
    //check user exist
    const userExist=await User.findOne({email})
    if(userExist){
        res.status(400)
        throw new Error('User already exist')
        }
    
    //hash password
    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)


     //create User
    const user=await User.create({
        name,
        email,
        password:hashedPassword,
        isStudent
    })

    if(user){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            isStudent:user.isStudent
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data' )
    }

    
})
let refreshTokens=[];
const refreshFunction=asynchandler(async(req,res)=>{
    //take refresh token from user
    const refreshToken=req.body.token

    //send error if there is not token and it is invalid
     if(!refreshToken) return res.status(401).json("You are not authenticated!")
     if(!refreshTokens.includes(refreshToken)){
        return res.status(403).json("Refresh token is not valid")
     }
     try{
        const decoded=jwt.verify(refreshToken,process.env.JWT_SECRET2)

       const userid=await User.findById(decoded.id).select('-password')

       refreshTokens=refreshTokens.filter((token)=>token!== refreshToken)
    //    console.log("userh",userid._id)
       const newAccessToken=generateAccessToken(userid._id)
       const newRefreshToken=generateRefreshToken(userid._id)

       refreshTokens.push(newRefreshToken)

       res.status(200).json({
           accessToken:newAccessToken,
           refreshToken:newRefreshToken,
       })

     }catch(error){
        console.log(error)
        res.status(401)
        throw new Error('Not authorized/not allowed') 
     }

    //  jwt.verify(refreshToken,process.env.JWT_SECRET2,(err,user)=>{
    //     err && console.log("error",err)

    //     refreshTokens=refreshTokens.filter((token)=>token!== refreshToken)
        
    //     console.log("userh",userid._id)
    //     const newAccessToken=generateAccessToken(user.id)
    //     const newRefreshToken=generateRefreshToken(user.id)
    //       refreshTokens.push(newRefreshToken)
    //     res.status(200).json({
    //         accessToken:newAccessToken,
    //         refreshToken:newRefreshToken,
    //     })

    // })



    //if every thing ok, create new access token, **refresh token
    
})

//authenticate user
const loginUser=asynchandler(async(req,res)=>{
    const {email,password}=req.body
    
    //check user email
    const user=await User.findOne({email})
         
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken=generateAccessToken(user._id)
        const refreshToken=generateRefreshToken(user._id)
        refreshTokens.push(refreshToken)
        res.json({
            _id:user.id,
            name:user.name,
            email:user.email,
            isStudent:user.isStudent,
            accessToken,
            refreshToken

        })
    }else{
        res.status(400)
        throw new Error('Invalid credentials')
    }    
})




//get users
const getUser=asynchandler(async(req,res)=>{
    
    const {_id,name,email}=await User.findById(req.user.id)

    res.status(200).json({
        id:_id,
        name,
        email,
        isStudent
    })
    //res.status(200).json(req.user)
    //because we already written find in the middleware 

    

})

//logout User
const logoutUser=asynchandler(async(req,res)=>{
    const refreshToken=req.body.token;
    refreshTokens=refreshTokens.filter((token)=> token !== refreshToken)
    res.status(200).json("You logout successfully")
 })  



 //accept user as student
const acceptStudent=asynchandler(async(req,res)=>{
    try{
        const id=req.body.userId
        const accepted=await User.findByIdAndUpdate(id,{"isStudent":true},{new:true})
       res.status(200).json(accepted)
          
  }catch(error){
        res.status(400).json("error is occured")
  }
})

module.exports={
    registerUser,
    loginUser,
    getUser,
    refreshFunction,
    logoutUser,
    acceptStudent,
    
   
}