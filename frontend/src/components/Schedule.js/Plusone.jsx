import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { setDefaultLocale } from 'react-datepicker'
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import AdminSidebar from '../AdminSidebar'

function Plusone() {


   const courseId = useParams();
//    console.log("cid",courseId);

   const [schedule,setSchedule]=useState('')
   const [course,setCourse]=useState('')

  const navigate=useNavigate()
 
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
           

            const { data } = await axios.get(`/api/admins/editcourse/${courseId.courseId}`,config);

                setCourse(data)
       
                //    console.log(course.coursename);
              const  details  = await axios.get('/api/admins/getschedule', {
                params:{
                    
                    course:course.coursename
                  }
              },config)
           


              console.log("aaaaap",details?.data[0]);

              const datas=details.data[0]
              setSchedule(datas)


             
             

            } catch (error) {
                console.error(error)
            }
        })();

    }else{
        navigate('/admin')
    }

    }, [courseId])



//    const addSchedule=(courseId)=>{
//    console.log("id,",courseId);
//    try {
//     navigate(`/addschedule/${courseId}`)
//    } catch (error) {
//     console.log(error)
//    }
//    } 
  
   











    return (
        <div>
            <AdminSidebar />
            <div className="container mt-5">
                <h5>Course: <b>{course.coursename}</b></h5>
                <div className="timetable-img text-center">
                    {/* <img src="img/content/timetable.png" alt=""/> */}
                    <Button className='addbutton mb-3  btn-success' 
                    // onClick={()=>addSchedule(courseId.courseId)}
                    >
                        Add Schedule +
                    </Button>
                    <Button className='deletebutton  mt-2 ml-auto ' style={{display:"block"}} 
                    // onClick={handleDelete} 
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
                                    <div className="font-size13 text-light-gray mt-3 "></div>
                                </td>
                                <td>
                                    <span className="" >Yoga</span>
                                    <div className="margin-10px-top font-size14">9:00-10:00</div>
                                    <div className="font-size13 text-light-gray">Marta Healy</div>
                                </td>

                                <td>
                                    <span className="" >Music</span>
                                    <div className="margin-10px-top font-size14">9:00-10:00</div>
                                    <div className="font-size13 text-light-gray">Ivana Wong</div>
                                </td>
                                <td>

                                    <span className="" >Dance</span>
                                    <div className="margin-10px-top font-size14">9:00-10:00</div>
                                    <div className="font-size13 text-light-gray">Ivana Wong</div>
                                </td>
                                
                            </tr>

                            <tr>
                                <td>
                                <div className="font-size13 text-light-gray mt-3"></div>

                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td>
                                    <span className="" >Art</span>
                                    <div className="margin-10px-top font-size14">10:00-11:00</div>
                                    <div className="font-size13 text-light-gray">Kate Alley</div>
                                </td>
                                <td>
                                    <span className="" >Yoga</span>
                                    <div className="margin-10px-top font-size14">10:00-11:00</div>
                                    <div className="font-size13 text-light-gray">Marta Healy</div>
                                </td>
                                
                            </tr>

                            <tr>
                                <td>
                                <div className="font-size13 text-light-gray mt-3"></div>

                                </td>
                                <td>
                                    <span className="" >Break</span>
                                    <div className="margin-10px-top font-size14">11:00-12:00</div>
                                </td>
                                <td>
                                    <span className="" >Break</span>
                                    <div className="margin-10px-top font-size14">11:00-12:00</div>
                                </td>
                                <td>
                                    <span className="" >Break</span>
                                    <div className="margin-10px-top font-size14">11:00-12:00</div>
                                </td>
                                
                           
                            </tr>

                            <tr>
                                <td className="bg-light-gray">
                                <div className="font-size13 text-light-gray mt-3"></div>
                                </td>
                                <td>
                                <div className="font-size13 text-light-gray mt-3">Ivana Wong</div>

                                </td>
                                <td>
                                    <span className="" >Dance</span>
                                    <div className="margin-10px-top font-size14">12:00-1:00</div>
                                    <div className="font-size13 text-light-gray">Ivana Wong</div>
                                </td>
                                <td>
                                    <span className="" >Music</span>
                                    <div className="margin-10px-top font-size14">12:00-1:00</div>
                                    <div className="font-size13 text-light-gray">Ivana Wong</div>
                                </td>
                                
                            </tr>

                            <tr>
                                <td>
                                <div className="font-size13 text-light-gray mt-3"></div>

                                </td>
                                <td>
                                    <span className="" >Music</span>
                                    <div className="margin-10px-top font-size14">1:00-2:00</div>
                                    <div className="font-size13 text-light-gray">Ivana Wong</div>
                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td>
                                    <span className=""  >English</span>
                                    <div className="margin-10px-top font-size14">1:00-2:00</div>
                                    <div className="font-size13 text-light-gray">James Smith</div>
                                </td>
                                
                            </tr>
                            <tr>
                                <td>
                                <div className="font-size13 text-light-gray mt-3"></div>

                                </td>
                                <td>
                                    <span className="" >Music</span>
                                    <div className="margin-10px-top font-size14">1:00-2:00</div>
                                    <div className="font-size13 text-light-gray">Ivana Wong</div>
                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td>
                                    <span className=""  >English</span>
                                    <div className="margin-10px-top font-size14">1:00-2:00</div>
                                    <div className="font-size13 text-light-gray">James Smith</div>
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
