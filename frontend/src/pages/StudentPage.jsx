import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function StudentPage() {


const [schedule,setSchedule]=useState('')
const student=JSON.parse(localStorage.getItem('student'))
console.log("ppp",student);
  useEffect(()=>{
// console.log("ppp",student);
    
    (async function(){
      try{
        const config = {
          headers: {
              "Content-type": "application/json",

          }
      }
      const {data}=await axios.get('/api/admins/accesscourse',{
        params:{
          course:student.course
        }
      },config)
      // console.log("courseid",data._id);
      const courseId=data._id

      const schedule = await axios.get(`/api/admins/getschedule/${courseId}`,config);
      // console.log("sch",schedule.data);
      setSchedule(schedule.data)

       

          
      }catch(error){

      }
    })();
  },[])

  return (

 
    // import ModalImage from "react-modal-image";

    // <ModalImage
    //   small={urlToTinyImageFile}
    //   large={urlToHugeImageFile}
    //   alt="Hello World!"
    // />;




    <div>
        <Header/>
        <div className='container mt-5'> 
        <div>
          <h5>Course:<b>{student.course}</b></h5>
          <h5>Name: <b>{student.name}</b></h5>
        </div>
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
                                    <div className="font-size13 text-light-gray mt-3 ">{schedule.mday}</div>
                                </td>
                                <td>
                                <div className="font-size13 text-light-gray mt-3 ">{schedule.mstarttime} to {schedule.mendtime}</div>
                                   
                                </td>

                                <td>
                                <div className="font-size13 text-light-gray mt-3 ">{schedule.msubject}</div>
                                  
                                </td>
                                <td>
                                <div className="font-size13 text-light-gray mt-3 ">{schedule.mteacher}</div>
                                  
                                </td>
                                
                            </tr>

                            <tr>
                                <td>
                                <div className="font-size13 text-light-gray mt-3">{schedule.tuday}</div>

                                </td>
                                <td>
                                <div className="font-size13 text-light-gray mt-3 ">{schedule.tustarttime} to {schedule.tuendtime}</div>
                                
                                </td>
                                <td>
                                <div className="font-size13 text-light-gray mt-3 ">{schedule.tusubject}</div>
                                    
                                </td>
                                <td>
                                <div className="font-size13 text-light-gray mt-3 ">{schedule.tuteacher}</div>
                                    
                                </td>
                                
                            </tr>

                            <tr>
                                <td>
                                <div className="font-size13 text-light-gray mt-3">{schedule.wday}</div>

                                </td>
                                <td>
                                <div className="font-size13 text-light-gray mt-3">{schedule.wstarttime} to {schedule.wendtime}</div>
                                </td>
                                <td>
                                <div className="font-size13 text-light-gray mt-3">{schedule.wsubject}</div>
                                </td>
                                <td>
                                <div className="font-size13 text-light-gray mt-3">{schedule.wteacher}</div>
                                </td>
                                
                           
                            </tr>

                            <tr>
                                <td>
                            <div className="font-size13 text-light-gray mt-3">{schedule.thday}</div>
                                </td>
                                <td>
                                <div className="font-size13 text-light-gray mt-3">{schedule.thstarttime} to {schedule.thendtime}</div>

                                </td>
                                <td>
                                <div className="font-size13 text-light-gray mt-3">{schedule.thsubject} </div>

                                </td>
                                <td>
                                <div className="font-size13 text-light-gray mt-3">{schedule.thteacher}</div>

                                </td>
                                
                            </tr>

                            <tr>
                                <td>
                                <div className="font-size13 text-light-gray mt-3">{schedule.fday}</div>

                                </td>
                                <td>
                                <div className="font-size13 text-light-gray mt-3">{schedule.fstarttime} to {schedule.fendtime}</div>
                                </td>
                                <td className="bg-light-gray"><div className="font-size13 text-light-gray mt-3">{schedule.fsubject}</div>

                                </td>
                                <td>
                                <div className="font-size13 text-light-gray mt-3">{schedule.fteacher}</div>
                                </td>
                                
                            </tr>
                            <tr>
                                <td>
                                <div className="font-size13 text-light-gray mt-3">{schedule.sday}</div>

                                </td>
                                <td>
                                <div className="font-size13 text-light-gray mt-3">{schedule.sstarttime} to {schedule.sendtime}</div>
                                </td>
                                <td>
                                <div className="font-size13 text-light-gray mt-3">{schedule.ssubject}</div>

                                </td>
                                <td>
                                <div className="font-size13 text-light-gray mt-3">{schedule.steacher}</div>
                                </td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>


        </div>
     
      {/* <Footer/> */}
    </div>
  )
}
