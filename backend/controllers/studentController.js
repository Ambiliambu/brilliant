const asynchandler=require('express-async-handler')
const {Student}=require('../models/userModel')


//register a student

const registerStudent=asynchandler(async(req,res)=>{
    const {name,email,parentsname,parentsnumber,phonenumber,course,status,userId}=req.body
    console.log("user",req.body);
     
    if(!name || !email || !parentsname || !parentsnumber || !phonenumber || !course  ){
      res.status(400)
      throw new Error('Please add all field')
    }
    //check student exist
    // const studentExist=await Student.findOne({email})
    // if(studentExist){
    //     res.status(400)
    //     throw new Error('Student already exist')
    //     }
    
   

     //create Student
    const student=await Student.create({
        name,
        email,
        parentsname,
        parentsnumber,
        phonenumber,
        course,
        status,
        userId
       
        
    })

    if(student){
        res.status(201).json({
            _id:student.id,
            name:student.name,
            email:student.email,
            parentsname:student.parentsname,
            parentsnumber:student.parentsnumber,
            phonenumber:student.phonenumber,
            course:student.course,
            status:student.status,
            userId:student.userId,
           
        })
    }else{
        res.status(400)
        throw new Error('Invalid student data')
    }

    
})

//approve student
const approveStudent=asynchandler(async(req,res)=>{
    try{
        const id=req.body.studentId
        const approve=await Student.findByIdAndUpdate(id,{"status":true},{new:true})
       res.status(200).json(approve)
          
  }catch(error){
        res.status(400).json("error is occured")
  }
})

module.exports={
    approveStudent,
    registerStudent,
   
}