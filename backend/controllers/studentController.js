const asynchandler=require('express-async-handler')
const {Student}=require('../models/userModel')
const bcrypt=require('bcryptjs')
const {generateAccessToken,generateRefreshToken} =require('../utils/generateToken')
const jwt =require('jsonwebtoken')
const {Course }=require('../models/adminModel')



//register a student

const registerStudent=asynchandler(async(req,res)=>{
    const {name,email,password,phonenumber,status}=req.body

    console.log("stu:");

    if(!name || !email || !password||  !phonenumber   ){
      res.status(400)
      throw new Error('Please add all field')
    }
    console.log("stiiiien:");

    //check student exist
    const studentExist=await Student.findOne({email})
    if(studentExist){
        res.status(400)
        throw new Error('Student already exist')
    }
        console.log("iiiiiden:");

    

      //hash password
      const salt=await bcrypt.genSalt(10)
      const hashedPassword=await bcrypt.hash(password,salt)
      console.log("studen:");
      
     //create Student
     try {
        const student=await Student.create({
            name,
            email,
            password:hashedPassword,
            phonenumber,
            status, 
        })
        console.log("studentiii",student);
        if(student){
            res.status(201).json({
                _id:student.id,
                name:student.name,
                email:student.email,
                password:student.password,
                phonenumber:student.phonenumber,              
                status:student.status,

               
            }
            )
  

        }
     } catch (error) {
        res.status(400)
        throw new Error('Invalid student data',error)
     }
       
   
    
     
   
    })
  
 //authenticate student
const loginStudent=asynchandler(async(req,res)=>{
    const {email,password}=req.body
    
 //check user email

    const student=await Student.findOne({email}).populate(["courseId"])
    console.log("lll",student);

    // if (student.status===false) throw new Error(`Student is blocked`);
         
    if(student && (await bcrypt.compare(password,student.password))){
        const accessToken=generateAccessToken(student._id)
        
        res.json({
            _id:student.id,
            name:student.name,
            email:student.email,
            password:student.password,
            phonenumber:student.phonenumber,
            status:student.status,
            paymentId:student.paymentId ? student.paymentId :"" ,
            accessToken,
            courseId:student.courseId ? student.courseId : "",
            coursename:student.courseId ? student?.courseId?.coursename  : "",
        })
    }else{
        res.status(400)
        throw new Error('Invalid credentials')
    }    
})



//approve student
const approveStudent=asynchandler(async(req,res)=>{
//  console.log("ll",req.body);
    const {parentsname,parentsnumber,paymentId,studentId,courseId}=req.body
    try{
        const approve=await Student.findByIdAndUpdate(studentId,
           {$set: {
                "parentsname":parentsname,
                "parentsnumber":parentsnumber,
                "courseId":courseId,
                "paymentId":paymentId

        }},{new:true})
        // console.log("app",approve);
       res.status(200).json(approve)
          
  }catch(error){
        res.status(400).json("error is occured")
  }
})

//get student
const getStudent=asynchandler(async(req,res)=>{
    // console.log(req.params,"ooo");
    try {
        const students=await Student.findOne({_id:req.params.studentId}).populate("courseId")
        res.json(students)
        
    } catch (error) {
        res.json("error is occured when getting students",error)
    }
})

//get students
const getStudents=asynchandler(async(req,res)=>{
    try {
        const students=await Student.find({}).populate(["courseId"])
        // console.log("tt",students);
        res.json(students)
        
    } catch (error) {
        res.json("error is occured when getting students",error)
    }
})

//Block and Unblock student

const blockAndUnblockStudent=async(req,res)=>{
// console.log("idqqq",req.params,req.body);
 try{
    const student=await Student.findByIdAndUpdate(req.params.Id,{"status":req.body.status},{new:true})
    console.log("pp", student);
        res.status(200).json(student)
    }catch(error){
        res.status(400).json(error)
    }

}

//student for course

const courseStudent=asynchandler(async(req,res)=>{

    try {
        
        // console.log("cou",course);
        const student=await Student.aggregate([
           {
            "$group":{"_id":{"courseId":"$courseId"},"count":{"$sum": 1 }}
           },     
    ])

    console.log("stu",student);
    res.status(200).json(student)
    

    } catch (error) {
        res.status(400).json(error)

    }


    

})



module.exports={

    registerStudent,
    loginStudent,
    getStudent,
    approveStudent,
    getStudents,
    blockAndUnblockStudent,
    courseStudent
   
}