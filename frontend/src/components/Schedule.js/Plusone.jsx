import axios from 'axios'
import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useLocation, useParams } from 'react-router-dom'
import AdminSidebar from '../AdminSidebar'

function Plusone() {

    const location = useLocation();
    // console.log("staate", location.state);
   const value=location.state.value


    // 
    useEffect(() => {
        console.log("state", location.state.value);
        //    const course=localStorage.getItem('course',JSON.stringify(course))
        (async function () {
            try {
                const config = {
                    headers: {
                        "Content-type": "application/json",

                    }
                }
                const { data } = await axios.get('/api/admins/getcourses', config)
                console.log("data", data);

            } catch (error) {
                throw new error(error.response.data.message)
            }
        })();
    }, [])

    return (
        <div>
            <AdminSidebar />
            <div className="container mt-5">
                <div className="timetable-img text-center">
                    {/* <img src="img/content/timetable.png" alt=""/> */}
                    <Button className='addbutton m-2 btn-success'
                    ><Link to='/plusoneschedule' state={{course:value}}>Add Schedule +</Link></Button>
                </div>
                <div className="table-responsive">
                    <table className="table table-bordered text-center">

                        <thead>
                            <tr className="bg-light-gray">

                                <th className="text-uppercase">Monday</th>
                                <th className="text-uppercase">Tuesday</th>
                                <th className="text-uppercase">Wednesday</th>
                                <th className="text-uppercase">Thursday</th>
                                <th className="text-uppercase">Friday</th>
                                <th className="text-uppercase">Saturday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <span className="" style={{ color: "white", backgroundColor: "skyblue" }}>Dance</span>
                                    <div className="margin-10px-top font-size14">9:00-10:00</div>
                                    <div className="font-size13 text-light-gray">Ivana Wong</div>
                                </td>
                                <td>
                                    <span className="" style={{ color: "white", backgroundColor: "skyblue" }}>Yoga</span>
                                    <div className="margin-10px-top font-size14">9:00-10:00</div>
                                    <div className="font-size13 text-light-gray">Marta Healy</div>
                                </td>

                                <td>
                                    <span className="" style={{ color: "white", backgroundColor: "skyblue" }}>Music</span>
                                    <div className="margin-10px-top font-size14">9:00-10:00</div>
                                    <div className="font-size13 text-light-gray">Ivana Wong</div>
                                </td>
                                <td>
                                    <span className="" style={{ color: "white", backgroundColor: "skyblue" }}>Dance</span>
                                    <div className="margin-10px-top font-size14">9:00-10:00</div>
                                    <div className="font-size13 text-light-gray">Ivana Wong</div>
                                </td>
                                <td>
                                    <span className="" style={{ color: "white", backgroundColor: "skyblue" }}>Art</span>
                                    <div className="margin-10px-top font-size14">9:00-10:00</div>
                                    <div className="font-size13 text-light-gray">Kate Alley</div>
                                </td>
                                <td>
                                    <span className="" style={{ color: "white", backgroundColor: "skyblue" }}>English</span>
                                    <div className="margin-10px-top font-size14">9:00-10:00</div>
                                    <div className="font-size13 text-light-gray">James Smith</div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <span className="" style={{ color: "white", backgroundColor: "skyblue" }}>Music</span>
                                    <div className="margin-10px-top font-size14">10:00-11:00</div>
                                    <div className="font-size13 text-light-gray">Ivana Wong</div>
                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td>
                                    <span className="" style={{ color: "white", backgroundColor: "skyblue" }}>Art</span>
                                    <div className="margin-10px-top font-size14">10:00-11:00</div>
                                    <div className="font-size13 text-light-gray">Kate Alley</div>
                                </td>
                                <td>
                                    <span className="" style={{ color: "white", backgroundColor: "skyblue" }}>Yoga</span>
                                    <div className="margin-10px-top font-size14">10:00-11:00</div>
                                    <div className="font-size13 text-light-gray">Marta Healy</div>
                                </td>
                                <td>
                                    <span className="" style={{ color: "white", backgroundColor: "skyblue" }}>English</span>
                                    <div className="margin-10px-top font-size14">10:00-11:00</div>
                                    <div className="font-size13 text-light-gray">James Smith</div>
                                </td>
                                <td className="bg-light-gray">

                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <span className="" style={{ color: "white", backgroundColor: "skyblue" }}>Break</span>
                                    <div className="margin-10px-top font-size14">11:00-12:00</div>
                                </td>
                                <td>
                                    <span className="" style={{ color: "white", backgroundColor: "skyblue" }}>Break</span>
                                    <div className="margin-10px-top font-size14">11:00-12:00</div>
                                </td>
                                <td>
                                    <span className="" style={{ color: "white", backgroundColor: "skyblue" }}>Break</span>
                                    <div className="margin-10px-top font-size14">11:00-12:00</div>
                                </td>
                                <td>
                                    <span className="" style={{ color: "white", backgroundColor: "skyblue" }}>Break</span>
                                    <div className="margin-10px-top font-size14">11:00-12:00</div>
                                </td>
                                <td>
                                    <span className="" style={{ color: "white", backgroundColor: "skyblue" }}>Break</span>
                                    <div className="margin-10px-top font-size14">11:00-12:00</div>
                                </td>
                                <td>
                                    <span className="" style={{ color: "white", backgroundColor: "skyblue" }}>Break</span>
                                    <div className="margin-10px-top font-size14">11:00-12:00</div>
                                </td>
                            </tr>

                            <tr>
                                <td className="bg-light-gray">

                                </td>
                                <td>
                                    <span className="" style={{ color: "white", backgroundColor: "skyblue" }}>Art</span>
                                    <div className="margin-10px-top font-size14">12:00-1:00</div>
                                    <div className="font-size13 text-light-gray">Kate Alley</div>
                                </td>
                                <td>
                                    <span className="" style={{ color: "white", backgroundColor: "skyblue" }}>Dance</span>
                                    <div className="margin-10px-top font-size14">12:00-1:00</div>
                                    <div className="font-size13 text-light-gray">Ivana Wong</div>
                                </td>
                                <td>
                                    <span className="" style={{ color: "white", backgroundColor: "skyblue" }}>Music</span>
                                    <div className="margin-10px-top font-size14">12:00-1:00</div>
                                    <div className="font-size13 text-light-gray">Ivana Wong</div>
                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td>
                                    <span className="" style={{ color: "white", backgroundColor: "skyblue" }}>Yoga</span>
                                    <div className="margin-10px-top font-size14">12:00-1:00</div>
                                    <div className="font-size13 text-light-gray">Marta Healy</div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <span className="" style={{ color: "white", backgroundColor: "skyblue" }}>English</span>
                                    <div className="margin-10px-top font-size14">1:00-2:00</div>
                                    <div className="font-size13 text-light-gray">James Smith</div>
                                </td>
                                <td>
                                    <span className="" style={{ color: "white", backgroundColor: "skyblue" }}>Music</span>
                                    <div className="margin-10px-top font-size14">1:00-2:00</div>
                                    <div className="font-size13 text-light-gray">Ivana Wong</div>
                                </td>
                                <td className="bg-light-gray">

                                </td>
                                <td>
                                    <span className="" style={{ color: "white", backgroundColor: "skyblue" }} >English</span>
                                    <div className="margin-10px-top font-size14">1:00-2:00</div>
                                    <div className="font-size13 text-light-gray">James Smith</div>
                                </td>
                                <td>
                                    <span className="" style={{ color: "white", backgroundColor: "skyblue" }}>Yoga</span>
                                    <div className="margin-10px-top font-size14">1:00-2:00</div>
                                    <div className="font-size13 text-light-gray">Marta Healy</div>
                                </td>
                                <td>
                                    <span className="" style={{ color: "white", backgroundColor: "skyblue" }}>Music</span>
                                    <div className="margin-10px-top font-size14">1:00-2:00</div>
                                    <div className="font-size13 text-light-gray">Ivana Wong</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Plusone
