const asynchandler=require('express-async-handler')
const {Teacher}=require('../models/adminModel')
const bcrypt=require('bcryptjs')
const { Task } = require('../models/userModel')




//create teacher

const addTeacher=asynchandler(async(req,res)=>{
    const {name,email,password,phonenumber,course,subject,isTeacher}=req.body
    console.log("hhh",req.body);
    if(!name || !email || !password || !phonenumber || !course || !subject ){
        res.status(400)
        throw new ('Please add all field')
    }
    //check course and subject 
      const Exist=await Teacher.findOne({$and:[{course:course},{subject:subject}]})
      if(Exist){
        
           res.status(400)
           throw new Error( 'it already exists ')
       
      }
     

    // check it exist
    const teacherExist=await Teacher.findOne({email})
    if(teacherExist){
        res.status(400)    
        throw new Error('Already exist')
    }
    // check it same subject for same course


     
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
        throw new Error('Invalid data')
    }
})



//login teacher
const loginTeacher=async(req,res)=>{
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
    throw new Error('You are not Teacher ')
}   
if(teacher.isTeacher===false){
  res.status(400).json("Blocked")
  throw new Error('Teacher Blocked')
}
}



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



//get a teacher with id

const getTeacher =asynchandler(async (req, res) => {
  console.log("id",req.params.teacherId);
  
    try {
      const teacher = await Teacher.findById(req.params.teacherId);
      res.status(200).json(teacher);
    } catch (error) {
      res.json(error);
    }
  });
  // get teacher with course

const courseTeacher =asynchandler(async (req, res) => {
  const course=req.query.course
  console.log("cou",course);
    try {
      const teacher = await Teacher.find({course});
      console.log("kk",teacher);
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


  

  const addTask=async (req,res)=>{
   console.log("bifgtda",req.files);
   console.log("bifgtda",req.query);
   const {teacher,course,subject,startDate,endDate}=req.query
   const file=req.files.task;
   console.log("gg",file);

  
   if(req.files!==null && req.query !== null){
    try {
      const file=req.files.task;
      file.mv(`/home/ambili/Desktop/TutionCenter/frontend/public/uploads/${file.name}`,err=>{
        if(err){
          console.log("filemove Error",err);
          return res.status(500).send(err)
        }
       

      })
      const fileName=file.name;
      const filePath=`/uploads/${file.name}`;
      const {teacher,course,subject,startDate,endDate}=req.query
      console.log("ioio",teacher,course,subject);
      const tasks=await Task.create({
         teacher,
         course,
         subject,
         endDate,
         startDate,
         task:filePath

      })

      if(tasks){
        res.status(201).json({
          _id:tasks.id,
          teacher:tasks.teacher,
          course:tasks.course,
          subject:tasks.subject,
          endDate:tasks.endDate,
          sartDate:tasks.startDate,
          task:tasks.filePath,
          fileName
        })
      }else{
        res.status(400)
        throw new Error('Invalid data')
     }
      

    } catch (error) {
      res.status(400)
        throw new Error(error)
    }
   }else{
    return res.status(400).json('No file uploaded')
   }


  }

  const getTask=async(req,res)=>{
    console.log(req.params.teacherId,"iii");

     try{
      const task=await Task.find({teacher:req.params.teacherId})
      // console.log("yy",task);
       res.status(200).json(task)
     }catch(error){
      res.status(400)
      throw new Error(error)
     }
  }

  const getTasks=async(req,res)=>{
    console.log(req.params.course,"iii");

     try{
      const task=await Task.find({course:req.params.course})
      console.log("yy",task);
       res.status(200).json(task)
     }catch(error){
      res.status(400)
      throw new Error(error)
     }
  }


  const updateTeacher=async(req,res)=>{
    console.log("id",req.params.Id);
    
    const teacher=await Teacher.findById(req.params.Id)
    console.log("tre",teacher);
  
    
    if(teacher.isTeacher===true){
        try{
            console.log();
            const updateteacher=await Teacher.findByIdAndUpdate(req.params.Id,{"isTeacher":false},{new:true})
    
            console.log("uii",updateteacher);
            res.status(200).json(updateteacher)
        }catch(error){
            res.status(400).json(error)
        }
       } else{
            try{
                const updateteacher=await Teacher.findByIdAndUpdate(req.params.Id,{"isTeacher":true},{new:true})
    
                console.log("u",updateteacher);
                res.status(200).json(updateteacher)
            }catch(error){
                res.status(400).json(error)
            }
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
    addTask,
    getTask,
    getTasks,
    updateTeacher

 }