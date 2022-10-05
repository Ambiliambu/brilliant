import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Footer from '../components/Footer'
import TeacherHeader from '../components/TeacherHeader'

function Teacherpage() {
const teacher=JSON.parse(localStorage.getItem('teacher'))
  console.log("tes",teacher);

const [teacherdata,setTeacher]=useState('')
const [schedule,setSchedule]=useState('')
    useEffect(()=>{
      (async function(){
        try{
          const config = {
            headers: {
                "Content-type": "application/json",
  
            }
        }
         const course =await axios.get(`/api/admins/editteacher/${teacher._id}`,config)
         setTeacher(course.data)
        
         const {data} =await axios.get('/api/admins/accessschedule',{
          params:{
           email:teacher.email
          }}
          ,config)
         setSchedule(data)
         console.log("eac",data);
            
        }catch(error){
  
        }
      })();
    },[])

  return (
    <div>
      <TeacherHeader/>
      <div className='container mt-5'>
        <div>
        <h5>Course:<b>{teacherdata.course}</b></h5>
          <h5>Name: <b>{teacherdata.name}</b></h5>
        </div>
     
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

                        {teacherdata.name===schedule.mteacher ? (<>
                          <tr>
                                <td>
                                    
                                    <div className="font-size13 text-light-gray mt-3 ">{schedule.mday}</div>
                                </td>
                                <td>
                                <div className="font-size13 text-light-gray mt-3 ">{schedule.mstarttime} -to- {schedule.mendtime}</div>
                                   
                                </td>

                                <td>
                                <div className="font-size13 text-light-gray mt-3 ">{schedule.msubject}</div>
                                  
                                </td>
                                
                                
                            </tr></>):(<>
                             </>)}
                           
                             {teacherdata.name===schedule.tuteacher ? (<>
                            <tr>
                                <td>
                                <div className="font-size13 text-light-gray mt-3">{schedule.tuday}</div>

                                </td>
                                <td>
                                <div className="font-size13 text-light-gray mt-3 ">{schedule.tustarttime} -to- {schedule.tuendtime}</div>
                                
                                </td>
                                <td>
                                <div className="font-size13 text-light-gray mt-3 ">{schedule.tusubject}</div>
                                    
                                </td>
                                
                                
                                </tr></>):(<>
                             </>)}
                             {teacherdata.name===schedule.wteacher ? (<>
                            

                            <tr>
                                <td>
                                <div className="font-size13 text-light-gray mt-3">{schedule.wday}</div>

                                </td>
                                <td>
                                <div className="font-size13 text-light-gray mt-3">{schedule.wstarttime} -to- {schedule.wendtime}</div>
                                </td>
                                <td>
                                <div className="font-size13 text-light-gray mt-3">{schedule.wsubject}</div>
                                </td>
                                
                                
                           
                                </tr></>):(<>
                             </>)}
                             {teacherdata.name===schedule.thteacher ? (<>
                            <tr>
                                <td>
                            <div className="font-size13 text-light-gray mt-3">{schedule.thday}</div>
                                </td>
                                <td>
                                <div className="font-size13 text-light-gray mt-3">{schedule.thstarttime} -to- {schedule.thendtime}</div>

                                </td>
                                <td>
                                <div className="font-size13 text-light-gray mt-3">{schedule.thsubject} </div>

                                </td>
                       
                                
                                </tr></>):(<>
                             </>)}
                             {teacherdata.name===schedule.fteacher ? (<>
                            <tr>
                                <td>
                                <div className="font-size13 text-light-gray mt-3">{schedule.fday}</div>

                                </td>
                                <td>
                                <div className="font-size13 text-light-gray mt-3">{schedule.fstarttime} -to- {schedule.fendtime}</div>
                                </td>
                                <td className="bg-light-gray"><div className="font-size13 text-light-gray mt-3">{schedule.fsubject}</div>

                                </td>
                               
                                </tr></>):(<>
                             </>)}
                             {teacherdata.name===schedule.steacher ? (<>
                            <tr>
                                <td>
                                <div className="font-size13 text-light-gray mt-3">{schedule.sday}</div>

                                </td>
                                <td>
                                <div className="font-size13 text-light-gray mt-3">{schedule.sstarttime} -to- {schedule.sendtime}</div>
                                </td>
                                <td>
                                <div className="font-size13 text-light-gray mt-3">{schedule.ssubject}</div>

                                </td>
                              
                                
                                </tr></>):(<>
                             </>)}
                        </tbody>
                    </table>
                </div>
      </div>

      
      {/* <Footer/> */}
    </div>
  )
}






export default Teacherpage
