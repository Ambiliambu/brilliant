import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import TeacherHeader from '../components/TeacherHeader'

function Teacherpage() {

const navigate=useNavigate()
// const [teacherData,setTeacherData]=useState('')
const [schedule,setSchedule]=useState()
const teacher=JSON.parse(localStorage.getItem('teacher'))

    useEffect(()=>{
  // console.log("tes",teacher);
      if(teacher){
      (async function(){
        try{
          const config = {
            headers: {
                "Content-type": "application/json",
  
            }
        }
        
        const schedule = await axios.get(`/api/admins/getschedule/${teacher.courseId._id}`,config);
      console.log("sch",schedule.data);
      setSchedule(schedule.data)

            
        }catch(error){
  
        }
      })();
    }else{
      navigate('/')
    }
    },[])

  return (

    <div>
      <TeacherHeader/>
      <div className='container mt-5'>
         <div className='row'>
        
        <div  className='col-md-4 ' >
        <h5 className='mt-3'>Teacher:<b>{teacher.name}</b></h5>

        </div>
        <div className='col-md-4'>
        <h5 className='mt-3'>Course:<b>{teacher?.courseId?.coursename}</b></h5>

        </div>
        <div className='col-md-4'>
        <h5 className='mt-3'>Subject:<b>{teacher?.subjectId?.subjectname}</b></h5>

        </div>
      </div>
     
      {schedule ? (
        <div className="table-responsive ">
        <table className="table table-bordered text-center">

            <thead>
                <tr className="bg-light-gray">

                    <th className="text-uppercase">Day</th>
                    <th className="text-uppercase">Time</th>
                    <th className="text-uppercase">Subject</th>
                  

                </tr>
            </thead>
            <tbody>

            {teacher._id=== schedule?.monday?.teacherId?._id  ? (<>
              <tr>
                    <td>
                        
                        <div className="font-size13 text-light-gray mt-3 ">Monday</div>
                    </td>
                    <td>
                    <div className="font-size13 text-light-gray mt-3 ">{schedule?.monday?.startTime} -to- {schedule?.monday?.endTime}</div>
                       
                    </td>

                    <td>
                    <div className="font-size13 text-light-gray mt-3 ">{schedule?.monday?.subjectId?.subjectname}</div>
                      
                    </td>
                    
                    
                </tr></>):(<>
                 </>)}
               
                 {teacher._id===schedule?.tuesday?.teacherId._id ? (<>
                <tr>
                    <td>
                    <div className="font-size13 text-light-gray mt-3">Tuesday</div>

                    </td>
                    <td>
                    <div className="font-size13 text-light-gray mt-3 ">{schedule?.tuesday?.startTime} -to- {schedule?.tuesday?.endTime}</div>
                    
                    </td>
                    <td>
                    <div className="font-size13 text-light-gray mt-3 ">{schedule?.tuesday?.subjectId?.subjectname}</div>
                        
                    </td>
                    
                    
                    </tr></>):(<>
                 </>)}
                 {teacher._id===schedule?.wednesday?.teacherId._id  ? (<>
                

                <tr>
                    <td>
                    <div className="font-size13 text-light-gray mt-3">Wednesday</div>

                    </td>
                    <td>
                    <div className="font-size13 text-light-gray mt-3"> {schedule?.wednesday?.startTime} -to- {schedule?.wednesday?.endTime}</div>
                    </td>
                    <td>
                    <div className="font-size13 text-light-gray mt-3">{schedule?.wednesday?.subjectId?.subjectname}</div>
                    </td>
                    
                    
               
                    </tr></>):(<>
                 </>)}
                 {teacher._id===schedule?.thursday?.teacherId._id ? (<>
                <tr>
                    <td>
                <div className="font-size13 text-light-gray mt-3">Thursday</div>
                    </td>
                    <td>
                    <div className="font-size13 text-light-gray mt-3">{schedule?.thursday?.startTime} -to- {schedule?.thursday?.endTime}</div>

                    </td>
                    <td>
                    <div className="font-size13 text-light-gray mt-3">{schedule?.thursday?.subjectId?.subjectname} </div>

                    </td>
           
                    
                    </tr></>):(<>
                 </>)}
                 {teacher._id===schedule?.friday?.teacherId._id ? (<>
                <tr>
                    <td>
                    <div className="font-size13 text-light-gray mt-3">Friday</div>

                    </td>
                    <td>
                    <div className="font-size13 text-light-gray mt-3">{schedule?.friday?.startTime} -to- {schedule?.friday?.endTime}</div>
                    </td>
                    <td className="bg-light-gray"><div className="font-size13 text-light-gray mt-3">{schedule?.friday?.subjectId?.subjectname}</div>

                    </td>
                   
                    </tr></>):(<>
                 </>)}
                 {teacher._id===schedule?.saturday?.teacherId._id  ? (<>
                <tr>
                    <td>
                    <div className="font-size13 text-light-gray mt-3">Saturday</div>

                    </td>
                    <td>
                    <div className="font-size13 text-light-gray mt-3">{schedule?.saturday?.startTime} -to- {schedule?.saturday?.endTime}</div>
                    </td>
                    <td>
                    <div className="font-size13 text-light-gray mt-3">{schedule?.saturday?.subjectId?.subjectname}</div>

                    </td>
                  
                    
                    </tr></>):(<>
                 </>)}
            </tbody>
        </table>
    </div>
      ):(<>
        <div><h1 className='text-center'>No Schedule</h1></div>
        </>)}
      </div>

      
      {/* <Footer/> */}
    </div>
  )
}






export default Teacherpage
