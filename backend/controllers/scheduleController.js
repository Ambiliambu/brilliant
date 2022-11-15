const asynchandler=require('express-async-handler')
const {Schedule, Teacher, Course}=require('../models/adminModel')
const moment=require('moment')



//create schedule

const addSchedule=asynchandler(async(req,res)=>{

  const {monday,tuesday,wednesday,thursday,friday,saturday,courseId,createDate,endDate}= req.body

    // console.log("ggrwq.body ",req.body)

    if(!monday.subjectId || !monday.teacherId || !tuesday.subjectId || !tuesday.teacherId || !wednesday.subjectId || !wednesday.teacherId || !thursday.subjectId || !thursday.teacherId || !friday.subjectId || !friday.teacherId || !saturday.subjectId || !saturday.teacherId || !monday.startTime || !monday.endTime || !tuesday.startTime || !tuesday.endTime|| !wednesday.startTime || !wednesday.endTime|| !thursday.startTime || !thursday.endTime|| !friday.startTime || !friday.endTime|| !saturday.startTime || !saturday.endTime || !courseId){

        res.status(400)
        throw new Error('Please add all field',)
    }


  const  mondayData=await Teacher.find({$and:[{teacherId:monday.teacherId},{courseId:courseId},{subjectId:monday.subjectId}]})
  const tuesdayData =await Teacher.findOne({$and:[{teacherId:tuesday.teacherId},{subjectId:tuesday.subjectId},{courseId:courseId}]})
  const wednesdayData =await Teacher.findOne({$and:[{teacherId:wednesday.teacherId},{subjectId:wednesday.subjectId},{courseId:courseId}]})
  const thursdayData=await Teacher.findOne({$and:[{teacherId:thursday.teacherId},{subjectId:thursday.subjectId},{courseId:courseId}]})
  const fridayData =await Teacher.findOne({$and:[{teacherId:friday.teacherId},{subjectId:friday.subjectId},{courseId:courseId}]})
  const saturdayData =await Teacher.findOne({$and:[{teacherId:saturday.teacherId},{subjectId:saturday.subjectId},{courseId:courseId}]})
  console.log("iooooooi",fridayData,friday.teacherId,friday.subjectId);


if(!mondayData || !tuesdayData || !wednesdayData || !thursdayData || !fridayData || !saturdayData){
  console.log("iiii");
  res.status(400)
  throw new Error('Add correct values ')

}


  //create schedule
  const schedule=await Schedule.create({
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    courseId,
    createDate:moment(createDate).format('DD-MMM-YYYY'),
    endDate:moment(endDate).format('DD-MMM-YYYY')

    })
    if(schedule){
        res.status(201).json({
            _id:schedule.id,
            monday:schedule.monday,
            tuesday:schedule.tuesday,
            wednesday:schedule.wednesday,
            thursday:schedule.thursday,
            friday:schedule.friday,
            saturday:schedule.saturday,          
            createDate:schedule.createDate,
            endDate:schedule.endDate,
            courseId:schedule.courseId,

        })

    }else{
        res.status(400)
        throw new Error('Invalid data ')
    }
})


//get schedules
 const getSchedules=asynchandler(async(req,res)=>{
    try {
        const schedules=await Schedule.find({})
        // console.log("tt",schedules);
        res.json(schedules)
        
    } catch (error) {
        res.json("error is occured when getting scheduls")
    }
 })



//Delete schedule

const deleteSchedule = asynchandler(async (req, res) => {
  const Id=req.params.id
  console.log("hhhhj",Id);
try{
  const deleteschedule=await Schedule.findById(Id)
 const data= await deleteschedule.remove()
 console.log("gdetlte");
 res.status(200).json({  deletescheduleId:data._id })
}catch(error){
  res.status(400).json("error is occured when getting scheduls")
}
})







 //get schedule

const getSchedule =asynchandler(async (req, res) => {
  const Id=req.params.courseId;
  console.log("ttiiit",Id);
    try {
      const schedule= await Schedule.findOne({courseId:Id}).populate(["monday.subjectId","monday.teacherId","tuesday.subjectId","tuesday.teacherId","wednesday.subjectId","wednesday.teacherId","thursday.subjectId","thursday.teacherId","friday.subjectId","friday.teacherId","saturday.subjectId","saturday.teacherId","courseId"]);
      console.log("qqqgg",schedule);
     
      res.status(200).json(schedule);
    } catch (error) {
      res.json(error);
    }
  });


  const teacherSchedule =asynchandler(async (req, res) => {
    const Id=req.params.teacherId
    console.log("iiiiiid",Id);
  // //  console.log("em",email);
      try {
        const schedule= await Schedule.find({$or:[{"monday.teacherId":Id},{"tuesday.teacherId":Id},{"wednesday.teacherId":Id},{"thursday.teacherId":Id},{"friday.teacherId":Id},{"saturday.teacherId":Id}]})
        console.log("qqq",schedule);
        res.status(200).json(schedule);
      } catch (error) {
        res.json(error);
      }
    });




module.exports={
    addSchedule,
    getSchedules,
    deleteSchedule,
    getSchedule,
    teacherSchedule

}