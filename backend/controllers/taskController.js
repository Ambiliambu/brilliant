const asynchandler=require('express-async-handler')
const { Task } = require('../models/userModel')
const moment=require('moment')
const {upload, cloudinary, storage} = require('../utils/fileStorage');




 // add task

const addTask=asynchandler(async(req,res)=>{

  // console.log("date1",req.files);
  
  console.log("date2",req.files);
  console.log("date3",req.body);
 let Image=[];
 let Originalname=[];
  for(let i=0;i< req.files.length;i++){
   Image.push(req.files[i] ? req.files[i].path : null)
   Originalname.push(req.files[i] ? req.files[i].originalname : null)

  }

 const {teacherId,courseId,subjectId,endDate,name}=req.body
 console.log("date3",courseId,subjectId);

    if(!req.files || !teacherId || !courseId ||!subjectId ||!endDate ||!name){
       res.status(400)
       throw new Error ("Please Enter all field")
     }

  
    //task exist
    const taskExist=await Task.findOne({$and:[{fileName:{$in:Originalname}},{courseId,courseId},{subjectId:subjectId}]})
    console.log("kkk",taskExist);

    if(taskExist){
    console.log("okj");
    res.status(400)
    throw new Error ( 'Already exists' )
    }
      
  
    const tasks=await Task.create({
      teacherId,
      courseId,
      subjectId,
      endDate:moment(endDate).format('DD-MMM-YYY'),
      startDate:moment(new Date()).format('DD-MMM-YYY'),
      task:Image,
      fileName:Originalname,
      name

    })
  console.log("llll");
    if(tasks){
      // console.log("hhh",tasks);
      res.json(tasks)
    }else{
      console.log("pppp");
      res.status(400)
      throw new Error ( 'Task is not created ' )
    }

   


  })
  
  


  // get task
  
  const StudentTask=asynchandler(async(req,res)=>{
    console.log(req.params.courseId,"iii");
  
      try{
      const task=await Task.find({courseId:req.params.courseId}).populate(["teacherId",
    "courseId","subjectId"]).sort({createdAt: -1})
      console.log("yy",task);
        res.status(200).json(task)
      }catch(error){
      res.status(400)
      throw new Error(error)
      }
  })
  
 
  //get tasks

const getTasks=async(req,res)=>{

 try{
  const task=await Task.find({course:req.params.teacherId}).populate(["courseId","subjectId"]).sort({createdAt: -1})
  // console.log("yy",task);
   res.status(200).json(task)
 }catch(error){
  res.status(400)
  throw new Error(error)
 }
}

const deleteTask=asynchandler(async(req,res)=>{
  console.log("id",req.params.taskId);

  try {
      const task=await Task.findByIdAndDelete(req.params.taskId)
      console.log(";ll",task);
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})


 module.exports={
        addTask,
        StudentTask,
        getTasks,
        deleteTask
    }