import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { setDefaultLocale } from 'react-datepicker'
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import AdminSidebar from '../AdminSidebar'

function Plusone() {

    const [schedule, setSchedule] = useState()
    const [course, setCourse] = useState('')
    const [refresh, setrefresh] = useState(false);
    const navigate = useNavigate()
    const location = useLocation();
    const courseId = useParams();

    useEffect(() => {

        const admin = JSON.parse(localStorage.getItem('admin'))

        if (admin) {

            (async function () {
                try {
                    const config = {
                        headers: {
                            "Content-type": "application/json",

                        }
                    }

                    const { data } = await axios.get(`/api/admins/getschedule/${courseId.courseId}`, config);

                    // console.log("ooo", data);
                    setSchedule(data)
                    const details = await axios.get(`/api/admins/getcourse/${courseId.courseId}`, config);
                    // console.log("ooo", details.data);
                    setCourse(details.data)

                } catch (error) {
                    console.error(error)
                }
            })();

        } else {
            navigate('/admin')
        }
    }, [location, courseId, refresh])



    const addSchedule = () => {


        if (!schedule) {
            console.log("ppp");

            try {
                navigate(`/addschedule/${courseId.courseId}`)
            } catch (error) {
                console.log(error)
            }
        } else {
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
            await axios.delete(`/api/admins/deleteschedule/${Id}`,
          
             
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

               



    {schedule ? (<>

        <div className='row'>
            <div className='col-6'>
                <h5>Course: <b>{course.coursename}</b></h5>

            </div>
            <div className='col-6'>


                <Button className='deletebutton mb-4  ml-auto ' style={{ display: "block" }}
                    onClick={() => handleDelete(course._id)}
                >Delete</Button>


            </div>

        </div>

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
                            <div className="font-size13 text-light-gray mt-3 ">Monday</div>
                        </td>
                        <td>
                            <div className="font-size13 text-light-gray mt-3 ">{schedule.monday.startTime} to {schedule.monday.endTime}</div>

                        </td>

                        <td>
                 <div className="font-size13 text-light-gray mt-3 ">{schedule.monday?.subjectId.subjectname}</div>

                        </td>
                        <td>
                            <div className="font-size13 text-light-gray mt-3 ">{schedule.monday?.teacherId.name}</div>

                        </td>

                    </tr>

                    <tr>
                        <td>
                            <div className="font-size13 text-light-gray mt-3">Tuesday</div>

                        </td>
                        <td>
                            <div className="font-size13 text-light-gray mt-3 ">{schedule.tuesday.startTime} to {schedule.tuesday.endTime}</div>

                        </td>
                        <td>
                            <div className="font-size13 text-light-gray mt-3 ">{schedule.tuesday?.subjectId.subjectname}</div>

                        </td>
                        <td>
                            <div className="font-size13 text-light-gray mt-3 ">{schedule.tuesday?.teacherId.name}</div>

                        </td>

                    </tr>

                    <tr>
                        <td>
                            <div className="font-size13 text-light-gray mt-3">Wednesday</div>

                        </td>
                        <td>
                            <div className="font-size13 text-light-gray mt-3">{schedule.wednesday.startTime} to {schedule.wednesday.endTime}</div>
                        </td>
                        <td>
                            <div className="font-size13 text-light-gray mt-3">{schedule.wednesday?.subjectId.subjectname}</div>
                        </td>
                        <td>
                            <div className="font-size13 text-light-gray mt-3">{schedule.wednesday?.teacherId.name}</div>
                        </td>


                    </tr>

                    <tr>
                        <td>
                            <div className="font-size13 text-light-gray mt-3">Thursday</div>
                        </td>
                        <td>
                            <div className="font-size13 text-light-gray mt-3">{schedule.thursday.startTime} to {schedule.thursday.endTime}</div>

                        </td>
                        <td>
                            <div className="font-size13 text-light-gray mt-3">{schedule.thursday?.subjectId.subjectname} </div>

                        </td>
                        <td>
                            <div className="font-size13 text-light-gray mt-3">{schedule.thursday?.teacherId.name}</div>

                        </td>

                    </tr>

                    <tr>
                        <td>
                            <div className="font-size13 text-light-gray mt-3">Friday</div>

                        </td>
                        <td>
                            <div className="font-size13 text-light-gray mt-3">{schedule.friday.startTime} to {schedule.friday.endTime}</div>
                        </td>
                        <td className="bg-light-gray"><div className="font-size13 text-light-gray mt-3">{schedule.friday?.subjectId.subjectname}</div>

                        </td>
                        <td>
                            <div className="font-size13 text-light-gray mt-3">{schedule.friday?.teacherId.name}</div>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <div className="font-size13 text-light-gray mt-3">Saturday</div>

                        </td>
                        <td>
                            <div className="font-size13 text-light-gray mt-3">{schedule.saturday.startTime} to {schedule.saturday.endTime}</div>
                        </td>
                        <td>
           <div className="font-size13 text-light-gray mt-3">{schedule.saturday?.subjectId.subjectname}</div>

                        </td>
                        <td>
                            <div className="font-size13 text-light-gray mt-3">{schedule.saturday?.teacherId.name}</div>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>

    </>
                ) : (<div>

     <div className='row'>
            <div className='col-6'>
                <h5>Course: <b>{course.coursename}</b></h5>

            </div>
            <div className='col-6'>


            <Button className='addbutton  btn-success'
                        onClick={addSchedule}
                    >
                        Add Schedule +
                    </Button>


            </div>

        </div>

                    
                    <h1 className='text-center'>No Schedule</h1>
                </div>)}

            </div>
        </div>
    )
}

export default Plusone
