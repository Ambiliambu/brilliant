const asynchandler=require('express-async-handler')
const {Admin,Course}=require('../models/adminModel')
const jwt =require('jsonwebtoken')
const bcrypt=require('bcryptjs')


//register a admin
const registerAdmin=asynchandler(async(req,res)=>{
    const {name,email,password}=req.body
     
    if(!name || !email || !password){
      res.status(400)
      throw new Error('Please add all field')
    }
    //check admin exist
    const adminExist=await Admin.findOne({email})
    if(adminExist){
        res.status(400)
        throw new Error('Admin already exist')
        }
    
    //hash password
    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)


     //create Admin
    const admin=await Admin.create({
        name,
        email,
        password:hashedPassword,
    })

    if(admin){
        res.status(201).json({
            _id:admin.id,
            name:admin.name,
            email:admin.email,
            token:generateToken(admin._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid admin data')
    }

    
})

//authenticate admin
const loginAdmin=asynchandler(async(req,res)=>{
    const {email,password}=req.body
    
    //check admin email
    const admin=await Admin.findOne({email})

    if(admin && (await bcrypt.compare(password,admin.password))){
        res.json({
            _id:admin.id,
            name:admin.name,
            email:admin.email,
            token:generateToken(admin._id)

        })
    }else{
        res.status(400)
        throw new Error('Invalid credentials')
    }    
})

//get admin
const getAdmin=asynchandler(async(req,res)=>{
    console.log("as",req.admin);
    const {_id,name,email}=await Admin.findById(req.admin.id)

    res.status(200).json({
        id:_id,
        name,
        email
    })
    //res.status(200).json(req.admin)
    //because we already written find in the middleware 

    

})
//generate token
const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET2,{
        expiresIn:'30d',

    })
}




module.exports={
    registerAdmin,
    loginAdmin,
    getAdmin
   
}