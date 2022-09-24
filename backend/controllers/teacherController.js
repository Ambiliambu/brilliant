const asynchandler=require('express-async-handler')
const {Teacher}=require('../models/adminModel')
const bcrypt=require('bcryptjs')




//create teacher

const addTeacher=asynchandler(async(req,res)=>{
    const {name,email,password,phonenumber,course,subject,isTeacher}=req.body
    console.log("hhh",req.body);
    if(!name || !email || !password || !phonenumber || !course || !subject ){
        res.status(400)
        throw new ('Please add all field')
    }
    //check course and subject 
      const courseExist=await Teacher.findOne({course})
      if(courseExist){
        const subjectExist=await Teacher.findOne({subject})
        if(subjectExist){
           res.status(400)
           throw new Error( 'it already exists ')
        }
      }
     

    // check it exist
    const teacherExist=await Teacher.findOne({email})
    if(teacherExist){
        res.status(400)    
        throw new Error('Already exist')
    }
     
    //hash password
    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)

    //create teacher

    const teacher=await Teacher.create({
      name,
      email,
      password:hashedPassword,
      phonenumber,
      course,
      subject,
      // salary,
      isTeacher
    })




    if(teacher){
        res.status(201).json({
            _id:teacher.id,
            name:teacher.name,
            email:teacher.email,
            password:teacher.password,
            phonenumber:teacher.phonenumber,
            course:teacher.course,
            subject:teacher.subject,
            // salary:teacher.salary,
            isTeacher:teacher.isTeacher,

        })
    }else{
        res.status(400)
        throw new Error('nvalid credentials')
    }
})




//login teacher
const loginTeacher=asynchandler(async(req,res)=>{
  const {email,password,isTeacher}=req.body

  //check admin email
  const teacher=await Teacher.findOne({email})

  if(teacher && (await bcrypt.compare(password,teacher.password))){
      res.json({
          _id:teacher.id,
          name:teacher.name,
          email:teacher.email,
          isTeacher:teacher.isTeacher,
          // token:generateToken(teacher._id)

      })
  }
  if(!teacher){
      res.status(400)
      throw new Error('You are not Teacher')
  }    
})



//get teachers
 const getTeachers=asynchandler(async(req,res)=>{
    try {
        const teachers=await Teacher.find({})
        res.json(teachers)
        
    } catch (error) {
        res.json("error is occured when getting details of teachers")
    }
 })




// //delete teacher
const deleteTeacher = asynchandler(async (req, res) => {
    const Id=req.query.id
    console.log("hhhhj",Id);

const deleteteacher=await Teacher.findById(Id)

  
    if (!deleteteacher) {
      res.status(400)
      throw new Error('Teacher not found')
    }
  
    // Check for admin*
    // if (!req.admin) {
    //   res.status(401)
    //   throw new Error('admin not found')
    // }
    await deleteteacher.remove()
  
    res.status(200).json({  deleteteacher:data._id })
  })



//get a teacher

const getTeacher =asynchandler(async (req, res) => {
    try {
      const teacher = await Teacher.findById(req.params.teacherId);
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



module.exports={
    addTeacher,
    getTeachers,
    deleteTeacher,
    getTeacher ,
    editTeacher,
    loginTeacher
 }