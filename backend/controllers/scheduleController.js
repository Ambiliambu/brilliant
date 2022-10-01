const asynchandler=require('express-async-handler')
const {Schedule, Teacher}=require('../models/adminModel')



//create schedule

const addSchedule=asynchandler(async(req,res)=>{

    // const [{mday, mstarttime,mendtime,msubject,mteacher},{tuday,tustarttime,tuendtime,tusubject,tuteacher},
    // {wday, wstarttime,wendtime,wsubject,wteacher},{thday, thstarttime,thendtime,thsubject,thteacher},
    //   {fday, fstarttime,fendtime,fsubject,fteacher},{sday, sstarttime,sendtime,ssubject,steacher}]=req.body
    
    const [{mday, mstarttime,mendtime,msubject,mteacher},{tuday,tustarttime,tuendtime,tusubject,tuteacher},
      {wday, wstarttime,wendtime,wsubject,wteacher},{thday, thstarttime,thendtime,thsubject,thteacher},
      {fday, fstarttime,fendtime,fsubject,fteacher},{sday, sstarttime,sendtime,ssubject,steacher},{course}]=req.body






    console.log("ggg",req.body,mendtime,tuendtime,wendtime,thendtime,fendtime,sendtime,course)
    
    if(!mday || !mstarttime || !mendtime || !msubject || !mteacher || !tuday || !tustarttime || !tuendtime || !tusubject || !tuteacher ||
      !wday || !wstarttime || !wendtime || !wsubject || !wteacher ||!thday || !thstarttime || !thendtime || !thsubject || !thteacher ||
      !fday || !fstarttime || !fendtime || !fsubject || !fteacher ||!sday || !sstarttime || !sendtime || !ssubject || !steacher ||!course ){

        res.status(400)
        throw new Error('Please add all field',)
    }



  //  const subjectm=await Teacher.find({$and:[{course:course},{subject:{$in:[msubject,tusubject,wsubject,thsubject,fsubject,ssubject]}}]})
  //  console.log("oo",subjectm);

 



 

  const subjectm =await Teacher.findOne({$and:[{name:mteacher},{course:course},{subject:msubject}]})
  const subjecttu =await Teacher.findOne({$and:[{name:tuteacher},{subject:tusubject},{course:course}]})
  const subjectw =await Teacher.findOne({$and:[{name:wteacher},{subject:wsubject},{course:course}]})
  const subjectth =await Teacher.findOne({$and:[{name:thteacher},{subject:thsubject},{course:course}]})
  const subjectf =await Teacher.findOne({$and:[{name:fteacher},{subject:fsubject},{course:course}]})
  const subjects =await Teacher.findOne({$and:[{name:steacher},{subject:ssubject},{course:course}]})

 console.log("tttt",subjectm);

if(!subjectm || !subjecttu || !subjectw || !subjectth || !subjectf || !subjects){
  console.log("iiii");
  res.status(400)
  throw new Error('add correct values ')

}
  // console.log("ee",subjectm);
  // const subjecttu=await courseteacher.findOne({$and:[{course:course},{subject:msubject}]})

 


  //check it exist
  const courseExist=await Schedule.findOne({course})
  if(courseExist){
   res.status(400)
   throw new Error('Aleready have schedule ')
  }

 

   console.log("create subject");
    //create schedule

    const schedule=await Schedule.create({
        mday,
        mstarttime,
        mendtime,
        msubject,
        mteacher,
        tuday,
        tustarttime,
        tuendtime,
        tusubject,
        tuteacher,
        wday,
        wstarttime,
        wendtime,
        wsubject,
        wteacher,
        thday,
        thstarttime,
        thendtime,
        thsubject,
        thteacher,
        fday,
        fstarttime,
        fendtime,
        fsubject,
        fteacher,
        sday,
        sstarttime,
        sendtime,
        ssubject,
        steacher,
        course,
        
    })

    console.log("iii",course);

    if(schedule){
        res.status(201).json({
            _id:schedule.id,

            mday:schedule.mday,
            mstarttime:schedule.mstarttime,
            mendtime:schedule.mendtime,
            msubject:schedule.msubject,
            mteacher:schedule.mteacher,

            tuday:schedule.tuday,
            tustarttime:schedule.tustarttime,
            tuendtime:schedule.tuendtime,
            tusubject:schedule.tusubject,
            tuteacher:schedule.tuteacher,

            wday:schedule.wday,
            wstarttime:schedule.wstarttime,
            wendtime:schedule.wendtime,
            wsubject:schedule.wsubject,
            wteacher:schedule.wteacher,

            thday:schedule.thday,
            thstarttime:schedule.thstarttime,
            thendtime:schedule.thendtime,
            thsubject:schedule.thsubject,
            thteacher:schedule.thteacher,


            fday:schedule.fday,
            fstarttime:schedule.fstarttime,
            fendtime:schedule.fendtime,
            fsubject:schedule.fsubject,
            fteacher:schedule.fteacher,

            sday:schedule.sday,
            sstarttime:schedule.sstarttime,
            sendtime:schedule.sendtime,
            ssubject:schedule.ssubject,
            steacher:schedule. steacher,

 
            course:schedule.course,

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
        console.log("tt",schedules);
        res.json(schedules)
        
    } catch (error) {
        res.json("error is occured when getting scheduls")
    }
 })


//delete schedule


const deleteSchedule = asynchandler(async (req, res) => {
    const Id=req.query.id
    console.log("hhhhj",Id);

const deleteschedule=await Schedule.findById(Id)

  
    if (!deleteschedule) {
      res.status(400)
      throw new Error('Schedule not found')
    }
    console.log("hhhhj");
  
    // Check for admin*
    // if (!req.admin) {
    //   res.status(401)
    //   throw new Error('admin not found')
    // }
  console.log("hhhhj");
   const data= await deleteschedule.remove()
  
    res.status(200).json({  deletescheduleId:data._id })
  })




// //get schedule

const getSchedule =asynchandler(async (req, res) => {
  const course=req.query.course;
  console.log("ttt",course);
    try {
      const schedule= await Schedule.find({course});
      
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
}