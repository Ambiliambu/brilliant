const asynchandler=require('express-async-handler')

//get users
const getUsers=asynchandler(async(req,res)=>{
    res.status(200).json({message:"get users"})

})
//set user
const setUser=asynchandler(async(req,res)=>{
    if(!req.body.name){
      res.status(400)
      throw new Error('Please add a name field')
    }
    res.status(200).json({message:"set users"})
    
})
module.exports={
    getUsers,
    setUser
}