const asynchandler=require('express-async-handler')
const User=require('../models/userModel')

//get users
const getUsers=asynchandler(async(req,res)=>{
      
    const users=await User.find() 

    res.status(200).json(users)

})
//set user
const setUser=asynchandler(async(req,res)=>{
    if(!req.body.name){
      res.status(400)
      throw new Error('Please add a name field')
    }
    const user=await User.create({
        name:req.body.name
    })
    res.status(200).json(user)
    
})
module.exports={
    getUsers,
    setUser
}