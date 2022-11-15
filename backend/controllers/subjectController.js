const asynchandler=require('express-async-handler')
const {Subject}=require('../models/adminModel')



//create subject

const addSubject=asynchandler(async(req,res)=>{
    const {subjectname,courseId}=req.body

    // console.log("gggg",req.body)
    
    if(!courseId || !subjectname){
        res.status(400)
        throw new Error ('Please add all field')
    }
   // check it exist
   const Exist=await Subject.findOne({$and:[{courseId:courseId},{subjectname:subjectname}]})
   if(Exist){
        res.status(400)
        throw new Error( 'It already exists ')
    }
   
    
   console.log("create subject");
    //create subject

    const subject=await Subject.create({
        courseId,subjectname
    })

    console.log("iii",courseId);

    if(subject){
        res.status(201).json({
            _id:subject.id,
            courseId:subject.courseId,
            subjectname:subject.subjectname
        })
    }else{
        res.status(400)
        throw new Error('Invalid data ')
    }
})


//get subjects
 const getSubjects=asynchandler(async(req,res)=>{
    try {
        const subjects=await Subject.find({}).populate("courseId")
        // console.log("oo",subjects);      
        res.json(subjects)
        
    } catch (error) {
        res.json("error is occured when getting subjects")
    }
 })

 const courseSubjects=asynchandler(async(req,res)=>{
    const Id=req.params.courseId
    try {
        const subjects=await Subject.find({courseId:Id}).populate("courseId")
        // console.log("oo",subjects);      
        res.json(subjects)
        
    } catch (error) {
        res.json("error is occured when getting subjects")
    }
 })

//delete subject

const deleteSubject=asynchandler(async(req,res)=>{
    const Id=req.query.id
  
    try{
        const deleteSubject=await Subject.findById(Id)
          const data= await  deleteSubject.remove()
          res.status(200).json({
             deleteSubjectId:data._id
          })
    }catch(error){
         res.status()
         throw new Error('Cannot get subject')
    }

})



//get subject

const getSubject =asynchandler(async (req, res) => {
    try {
      const subject = await Subject.findById(req.params.subjectId);
      res.status(200).json(subject);
    } catch (error) {
      res.json(error);
    }
  });

 




module.exports={
    addSubject,
    getSubjects,
    deleteSubject,
    getSubject ,
    courseSubjects
}