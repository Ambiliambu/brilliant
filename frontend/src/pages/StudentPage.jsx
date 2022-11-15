import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function StudentPage() {


const [schedule,setSchedule]=useState('')
const [courseId,setCourseId]=useState('')
// const [studentData,setStudentData]=useState()

const student=JSON.parse(localStorage.getItem('student'))
console.log("ppp",student);
const navigate=useNavigate()
  useEffect(()=>{
// console.log("ppp",student);
    
    (async function(){
      try{
        const config = {
          headers: {
              "Content-type": "application/json",

          }
      }
      // const studentt =await axios.get(`/api/users/getstudent/${student._id}`,config)
      //    console.log("svvv",studentt);
      //    setStudentData(studentt.data)

      const schedule = await axios.get(`/api/admins/getschedule/${student.courseId._id}`,config);
      console.log("sch",schedule.data);
      setSchedule(schedule.data)
    
      }catch(error){

      }
    })();
  },[])

  const chatHandle=(Id)=>{
    // console.log("oo",courseId);
  navigate(`/chat/${Id}`)
  }

  return (

 
 




    <div>
        <Header/>
        <div className='container mt-5'> 
        <div>
          <button onClick={()=>{chatHandle(student?.courseId?._id)}}>Chat</button>
          <h5>Course:<b>{student?.courseId?.coursename}</b></h5>
          <h5>Name: <b>{student.name}</b></h5>
        </div>
        {schedule ? (
          <div className="table-responsive ">
          <table className="table table-bordered text-center">

              <thead>
                  <tr className="bg-light-gray">

                      <th className="text-uppercase">Day</th>
                      <th className="text-uppercase">Time</th>
                      <th className="text-uppercase">Subject</th>
                      <th className="text-uppercase">Teacher</th>
                    
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>
                          {/* <span className="" >Dance</span> */}
                          {/* <div className="margin-10px-top font-size14">9:00-10:00</div> */}
                          <div className="font-size13 text-light-gray mt-3 ">Monday</div>
                      </td>
                      <td>
                      <div className="font-size13 text-light-gray mt-3 ">{schedule?.monday?.startTime} to {schedule?.monday?.endTime}</div>
                         
                      </td>

                      <td>
                      <div className="font-size13 text-light-gray mt-3 ">{schedule?.monday?.subjectId?.subjectname}</div>
                        
                      </td>
                      <td>
                      <div className="font-size13 text-light-gray mt-3 ">{schedule?.monday?.teacherId?.name}</div>
                        
                      </td>
                      
                  </tr>

                  <tr>
                      <td>
                      <div className="font-size13 text-light-gray mt-3">Tuesday</div>

                      </td>
                      <td>
                      <div className="font-size13 text-light-gray mt-3 ">{schedule?.tuesday?.startTime} to {schedule?.tuesday?.endTime}</div>
                      
                      </td>
                      <td>
                      <div className="font-size13 text-light-gray mt-3 ">{schedule?.tuesday?.subjectId?.subjectname}</div>
                          
                      </td>
                      <td>
                      <div className="font-size13 text-light-gray mt-3 ">{schedule?.tuesday?.teacherId?.name}</div>
                          
                      </td>
                      
                  </tr>

                  <tr>
                      <td>
                      <div className="font-size13 text-light-gray mt-3">Wednesday</div>

                      </td>
                      <td>
                      <div className="font-size13 text-light-gray mt-3">{schedule?.wednesday?.startTime} to {schedule?.wednesday?.endTime}</div>
                      </td>
                      <td>
                      <div className="font-size13 text-light-gray mt-3">{schedule?.wednesday?.subjectId?.subjectname}</div>
                      </td>
                      <td>
                      <div className="font-size13 text-light-gray mt-3">{schedule?.wednesday?.teacherId?.name}</div>
                      </td>
                      
                 
                  </tr>

                  <tr>
                      <td>
                  <div className="font-size13 text-light-gray mt-3">Thursday</div>
                      </td>
                      <td>
                      <div className="font-size13 text-light-gray mt-3">{schedule?.thursday?.startTime} to {schedule?.thursday?.endTime}</div>

                      </td>
                      <td>
                      <div className="font-size13 text-light-gray mt-3">{schedule?.thursday?.subjectId?.subjectname} </div>

                      </td>
                      <td>
                      <div className="font-size13 text-light-gray mt-3">{schedule?.thursday?.teacherId?.name}</div>

                      </td>
                      
                  </tr>

                  <tr>
                      <td>
                      <div className="font-size13 text-light-gray mt-3">Friday</div>

                      </td>
                      <td>
                      <div className="font-size13 text-light-gray mt-3">{schedule?.friday?.startTime} to {schedule?.friday?.endTime}</div>
                      </td>
                      <td className="bg-light-gray"><div className="font-size13 text-light-gray mt-3">{schedule?.friday?.subjectId?.subjectname}</div>

                      </td>
                      <td>
                      <div className="font-size13 text-light-gray mt-3">{schedule?.friday?.teacherId?.name}</div>
                      </td>
                      
                  </tr>
                  <tr>
                      <td>
                      <div className="font-size13 text-light-gray mt-3">Saturday</div>

                      </td>
                      <td>
                      <div className="font-size13 text-light-gray mt-3">{schedule?.saturday?.startTime} to {schedule?.saturday?.endTime}</div>
                      </td>
                      <td>
                      <div className="font-size13 text-light-gray mt-3">{schedule?.saturday?.subjectId?.subjectname}</div>

                      </td>
                      <td>
                      <div className="font-size13 text-light-gray mt-3">{schedule?.saturday?.teacherId?.name}</div>
                      </td>
                      
                  </tr>
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
