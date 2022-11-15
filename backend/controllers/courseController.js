
const asynchandler=require('express-async-handler')
const {Course }=require('../models/adminModel')



//create course

const addCourse=asynchandler(async(req,res)=>{
    const {coursename,courseamount}=req.body
    
    if(!coursename || !courseamount){
        res.status(400)
        throw new ('Please add all field')
    }
   // check it exist
    const courseExist=await Course.findOne({coursename})
    if(courseExist){
        res.status(400)
        
        throw new Error('Already exist')
    }
    //create course

    const course=await Course.create({
        coursename,courseamount
    })


    if(course){
        res.status(201).json({
            _id:course.id,
            coursename:course.coursename,
            courseamount:course.courseamount
        })
    }else{
        res.status(400)
        throw new Error('Invalid data ')
    }
})


//get courses
 const getCourses=asynchandler(async(req,res)=>{
    try {
        const courses=await Course.find({})
        console.log("iiiii");
        res.json(courses)
        
    } catch (error) {
        res.json("error is occured when getting courses")
    }
 })

//delete course

// const deleteCourse=asynchandler(async(req,res)=>{
//     const Id=req.query.id
  
//     try{
//         const deleteCourse=await Course.findById(Id)
//           const data= await  deleteCourse.remove()
//           res.status(200).json({
//              deleteCourseId:data._id
//           })
//     }catch(error){
//          res.status()
//          throw new Error('Cannot get course')
//     }

// })


const deleteCourse = asynchandler(async (req, res) => {
    const Id=req.query.id
    console.log("hhhhj",Id);

const deletecourse=await Course.findById(Id)

  
    if (!deletecourse) {
      res.status(400)
      throw new Error('course not found')
    }
    console.log("hhhhj");
  
    // Check for admin*
    // if (!req.admin) {
    //   res.status(401)
    //   throw new Error('admin not found')
    // }
  console.log("hhhhj");
    await deletecourse.remove()
  
    res.status(200).json({  deletecourseId:data._id })
  })



//get course

const getCourse =asynchandler(async (req, res) => {
  console.log("ppid",req.params);
    try {
      const course = await Course.findById({_id:req.params.courseId});
      // console.log("ll",course);
      res.status(200).json(course);
    } catch (error) {
      res.json(error);
    }
  });


  // edit course


  const editCourse = asynchandler(async (req, res) => {

    const editcourse = await Course.findById(req.params.courseId)

   console.log("ggg",editcourse);

    if (!editcourse ) {
      res.status(400)
      throw new Error('Course not found')
    }
    // Check for admin
    // if (!req.admin) {
    //   res.status(401)
    //   throw new Error('Admin not found')
    // }

     console.log("yyyyy");

    const newCourseData = {
        coursename: req.body.name,
        courseamount: req.body.amount,
      };
  
      console.log("iiii",newCourseData);
    const  updatecourse= await Course.findByIdAndUpdate(req.params.courseId, newCourseData, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    })
  console.log("jhh",updatecourse);
    res.status(200).json(updatecourse)
  })

//get course by name

const accessCourse =asynchandler(async (req, res) => {
  const coursename=req.query.course;
  // console.log("ttiiiit",typeof coursename);

    try {
      
      const course= await  Course.findOne({coursename:coursename})
      console.log("iii");
      // console.log("qqqqqqqq",course);
      res.status(200).json(course);
    } catch (error) {
      res.json(error);
    }
  });

module.exports={
    addCourse,
    getCourses,
    deleteCourse,
    getCourse ,
    editCourse,
    accessCourse
}