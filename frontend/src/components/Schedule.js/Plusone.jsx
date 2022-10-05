import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { setDefaultLocale } from 'react-datepicker'
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import AdminSidebar from '../AdminSidebar'

function Plusone() {


    const [schedule,setSchedule]=useState('')
    const [course,setCourse]=useState('')
    const [refresh, setrefresh] = useState(false);

    const navigate=useNavigate()
  const location=useLocation();
   const courseId = useParams();

//   setCourseid(courseId.courseId)
   console.log("cid",courseId);


 
    useEffect(() => {
  const admin=localStorage.getItem('admin');
    if(admin){
        
        (async function () {
            try {
                const config = {
                    headers: {
                        "Content-type": "application/json",

                    }
                }
           
// console.log("pppp");
            // const { data } = await axios.get(`/api/admins/editcourse/${courseId.courseId}`,config);

            //     setCourse(data)
       
            //        console.log(course.coursename);
            //   const  details  = await axios.get('/api/admins/getschedule', {
            //     params:{
                    
            //         course:course.coursename
            //       }
            //   },config)
        
            //   console.log("aaaaap",details?.data[0]);

            //   const datas=details.data[0]
            //   setSchedule(datas)

            const { data } = await axios.get(`/api/admins/getschedule/${courseId.courseId}`,config);

            // console.log("ooo",data);
            setSchedule(data)
           const  details  = await axios.get(`/api/admins/editcourse/${courseId.courseId}`,config);
            console.log("ooo",details.data);
           
                setCourse(details.data)

            } catch (error) {
                console.error(error)
            }
        })();

    }else{
        navigate('/admin')
    }
    }, [location,courseId,refresh])



   const addSchedule=(Id)=>{
   console.log("iddd,",Id);
   

if(!schedule){
    console.log("ppp");

   try {
    navigate(`/addschedule/${courseId.courseId}`)
   } catch (error) {
    console.log(error)
   }
}else{
    toast.error("It scheduled already")

}
   } 
  
   
 async function handleDelete(Id){
    console.log("Id",Id);

    try {
        const config = {
          headers: {
            "Content-type": "application/json",
          }
        }
        console.log("jhj");
        await axios.delete('/api/admins/deleteschedule',
        {
            params:{
                id:Id
            }
        },
         
        config );
        setrefresh(!refresh)
        
    
      } catch (error) {
        console.error(error.response.data.message)
      }


}










    return (
        <div>
            <AdminSidebar />
            <div className="container mt-5">
                <h5>Course: <b>{course.coursename}</b></h5>
                <div className="timetable-img text-center">
                    {/* <img src="img/content/timetable.png" alt=""/> */}
                    <Button className='addbutton mb-3  btn-success' 
                    onClick={addSchedule}
                    >
                        Add Schedule +
                    </Button>
                    <Button className='deletebutton  mt-2 ml-auto ' style={{display:"block"}} 
                    onClick={()=>handleDelete(schedule._id)} 
                    >Delete</Button>

               
                </div>



                {schedule ? (<>
                
                    <div className="table-responsive">
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
                
                </>
) :(<div><h1 className='text-center'>No Schedule</h1></div>)}
               
            </div>
        </div>
    )
}

export default Plusone
