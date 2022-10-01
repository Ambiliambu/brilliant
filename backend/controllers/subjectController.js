const asynchandler=require('express-async-handler')
const {Subject}=require('../models/adminModel')



//create subject

const addSubject=asynchandler(async(req,res)=>{
    const {subjectname,coursename}=req.body

    // console.log("gggg",req.body)
    
    if(!coursename || !subjectname){
        res.status(400)
        throw new ('Please add all field')
    }
   // check it exist
   const courseExist=await Subject.findOne({coursename})
   if(courseExist){
     const subjectExist=await Subject.findOne({subjectname})
     if(subjectExist){
        res.status(400)
        throw new Error( 'It already exists ')
     }
   }
   console.log("create subject");
    //create subject

    const subject=await Subject.create({
        coursename,subjectname
    })

    console.log("iii",coursename);

    if(subject){
        res.status(201).json({
            _id:subject.id,
            coursename:subject.coursename,
            subjectname:subject.subjectname
        })
    }else{
        res.status(400)
        throw new Error('Invalid data ')
    }
})


//get subject
 const getSubjects=asynchandler(async(req,res)=>{
    try {
        const subjects=await Subject.find({})
        // console.log("oo",subjects);
        res.json(subjects)
        
    } catch (error) {
        res.json("error is occured when getting subjects")
    }
 })

//delete subject

// const deleteSubject=asynchandler(async(req,res)=>{
//     const Id=req.query.id
  
//     try{
//         const deleteSubject=await Subject.findById(Id)
//           const data= await  deleteSubject.remove()
//           res.status(200).json({
//              deleteSubjectId:data._id
//           })
//     }catch(error){
//          res.status()
//          throw new Error('Cannot get subject')
//     }

// })


const deleteSubject = asynchandler(async (req, res) => {
    const Id=req.query.id
    console.log("hhhhj",Id);

const deletesubject=await Subject.findById(Id)

  
    if (!deletesubject) {
      res.status(400)
      throw new Error('subject not found')
    }
    console.log("hhhhj");
  
    // Check for admin*
    // if (!req.admin) {
    //   res.status(401)
    //   throw new Error('admin not found')
    // }
  console.log("hhhhj");
    await deletesubject.remove()
  
    res.status(200).json({  deletesubjectId:data._id })
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
}