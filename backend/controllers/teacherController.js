const asynchandler=require('express-async-handler')
const {Teacher}=require('../models/adminModel')
const bcrypt=require('bcryptjs')
const { Task } = require('../models/userModel')
const moment=require('moment')


//create teacher

const addTeacher=asynchandler(async(req,res)=>{
    const {name,email,password,phonenumber,courseId,subjectId,active,status,createdate,salary}=req.body
    if(!name || !email || !password || !phonenumber || !courseId || !subjectId  ){
        res.status(400)
        throw new Error ('Please add all field')
    }
    //check course and subject 
      // const Exist=await Teacher.findOne({$and:[{course:courseId},{subject:subjectId}]})
      // if(Exist){
      //      res.status(400)
      //      throw new Error( 'it already exists ')
      // }
     

    // check it exist
    const teacherExist=await Teacher.findOne({email})
    if(teacherExist){
        res.status(400)    
        throw new Error('Already exist')
    }

     
    //hash password
    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)
    
    console.log("ooodat",req.body.createdate);
    
    
   const day=moment(req.body.createdate).format('DD-MMM-YYYY')
    //create teacher
    const teacher=await Teacher.create({
      name,
      email,
      password:hashedPassword,
      phonenumber,
      courseId,
      subjectId,
      salary,
      createdate:day,
      status,
      active
    })

    if(teacher){
        res.status(201).json({
            _id:teacher.id,
            name:teacher.name,
            email:teacher.email,
            password:teacher.password,
            phonenumber:teacher.phonenumber,
            courseId:teacher.courseId,
            subjectId:teacher.subjectId,
            salary:teacher.salary,
            status:teacher.status,
            createddate:teacher.createddate,
            active:teacher.active

        })
    }else{
        res.status(400)
        throw new Error('Invalid data')
    }
})



//login teacher
const loginTeacher=async(req,res)=>{
  const {email,password}=req.body

  //check admin email
  const teacher=await Teacher.findOne({email}).populate(["courseId","subjectId"])
  try {
    if(teacher && (await bcrypt.compare(password,teacher.password))){
      res.json(teacher)
    }else{
      res.status(400)
      throw new Error('Invalid credentials')
    }  
  } catch (error) {
    res.status(400)
    throw new Error("Something went wrong")
  }

}



//get teachers
 const getTeachers=asynchandler(async(req,res)=>{
    try {
        const teachers=await Teacher.find({}).populate(["courseId","subjectId"])
        console.log("oo",teachers);
        res.json(teachers)
        
    } catch (error) {
        res.json("error is occured when getting details of teachers")
    }
 })




//delete teacher

const deleteTeacher = asynchandler(async (req, res) => {
    const Id=req.query.id
    console.log("hhhhj",Id);
try{
const deleteteacher=await Teacher.findById(Id)
await deleteteacher.remove()
 res.status(200).json({  deleteteacher:data._id })

}catch(error){
  res.status(400)
  throw new Error('Teacher not found')
} 
})



//get a teacher

const getTeacher =asynchandler(async (req, res) => {
  console.log("id",req.params.teacherId);
  
    try {
      const teacher = await Teacher.findById({_id:req.params.teacherId}).populate(['courseId',"subjectId"]);
      res.status(200).json(teacher);
    } catch (error) {
      res.json(error);
    }
  });



// get teacher with course
const courseTeacher =asynchandler(async (req, res) => {
  const courseId=req.params.courseId
  // console.log("cou",courseId);
    try {
      const teacher = await Teacher.find({courseId:courseId}).populate(["subjectId","courseId"]);
      // console.log("kk",teacher);
      res.status(200).json(teacher);
    } catch (error) {
      res.json(error);
    }
});

// edit teacher
const editTeacher = asynchandler(async (req, res) => {
   const editteacher = await Teacher.findById(req.params.teacherId)
   console.log("ggg",editteacher); 
    if (!editteacher ) {
      res.status(400)
      throw new Error('Teacher not found')
    }
    // Check for admin*
    // if (!req.admin) {
    //   res.status(401)
    //   throw new Error('Admin not found')
    // }

     console.log("yyyyy");

    const newTeacherData = {
        name: req.body.name,
        email:req.body.email,
        password:req.body.password,
        phonenumber:req.body.phonenumber,
        
      };
  
      console.log("iiii",newCourseData);
    const  updateteacher= await Course.findByIdAndUpdate(req.params.teacherId, newCourseData, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    })
  // console.log("jhh",updateteacher );
    res.status(200).json(updateteacher)
  })


  

  const blockAndUnblockTeacher=async(req,res)=>{
    console.log("id",req.params,req.body);
  
        try{
            console.log();
            const teacher=await Teacher.findByIdAndUpdate(req.params.Id,{"status":req.body.status},{new:true})
    
            console.log("uii",teacher);
            res.status(200).json(teacher)
        }catch(error){
            res.status(400).json(error)
        }
      
    
    }



module.exports={
    addTeacher,
    getTeachers,
    deleteTeacher,
    
    getTeacher ,
    editTeacher,
    loginTeacher,
    courseTeacher,
   
    blockAndUnblockTeacher

 }