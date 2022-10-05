import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Container, Dropdown, Modal } from 'react-bootstrap'
import DataTable from 'react-data-table-component'
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import TimePicker from 'react-time-picker';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import './Form.scss'
import {toast} from 'react-toastify'


function AddSchedule() {

  // const location = useLocation();
  // const course = location.state.course;
  const courseId=useParams();
  // console.log("idkk",courseId );
  const [course,setCourse]=useState('')
  console.log("fgfg",course);


  const navigate=useNavigate()
  const [mstarttime, setStarttimem] = useState('');
  const [mendtime, setEndtimem] = useState('');
  const [msubject, setSubjectm] = useState('');
  const [mteacher, setTeacherm] = useState('');
  const [mday, setDaym] = useState('')

  const [tustarttime, setStarttimetu] = useState('');
  const [tuendtime, setEndtimetu] = useState('');
  const [tusubject, setSubjecttu] = useState('');
  const [tuteacher, setTeachertu] = useState('');
  const [tuday, setDaytu] = useState('')


  const [wstarttime, setStarttimew] = useState('');
  const [wendtime, setEndtimew] = useState('');
  const [wsubject, setSubjectw] = useState('');
  const [wteacher, setTeacherw] = useState('');
  const [wday, setDayw] = useState('')


  const [thstarttime, setStarttimeth] = useState('');
  const [thendtime, setEndtimeth] = useState('');
  const [thsubject, setSubjectth] = useState('');
  const [thteacher, setTeacherth] = useState('');
  const [thday, setDayth] = useState('')

  const [fstarttime, setStarttimef] = useState('');
  const [fendtime, setEndtimef] = useState('');
  const [fsubject, setSubjectf] = useState('');
  const [fteacher, setTeacherf] = useState('');
  const [fday, setDayf] = useState('')


  const [sstarttime, setStarttimes] = useState('');
  const [sendtime, setEndtimes] = useState('');
  const [ssubject, setSubjects] = useState('');
  const [steacher, setTeachers] = useState('');
  const [sday, setDays] = useState('')


  const [subjects,setsubjects]=useState([])
  const [teachers,setteachers]=useState([])

  useEffect(() => {

    // console.log("ii",location.state.course);
    (async function () {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",

          }
        }
        console.log("ppp",courseId);
        const  coursedetails  = await axios.get(`/api/admins/editcourse/${courseId.courseId}`,config);
         setCourse(coursedetails.data)
        console.log("cod",coursedetails.data);

       console.log("course.coursename",coursedetails.data.coursename);
       const cname=coursedetails.data.coursename

        const {data}=await axios.get('/api/admins/courseteacher',
        {params:{
          course: cname
        }
      },
        config)
        console.log("courseadd",data);
         setteachers(data)

        const sub=await axios.get('/api/admins/getsubjects',config)
      //  console.log("subjectdd",sub.data);
        setsubjects(sub.data)


      } catch (error) {
        console.error(error)
      }
    })();

  },[])





  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("data", mstarttime, mendtime, mteacher, msubject, mday);
    console.log("data", tustarttime, tuendtime, tuteacher, tusubject, tuday);
    console.log("data", wstarttime, wendtime, wteacher, wsubject, wday);
    console.log("data", thstarttime, thendtime, thteacher, thsubject, thday);
    console.log("data", fstarttime, fendtime, fteacher, fsubject, fday);
    console.log("data", sstarttime, sendtime, steacher, ssubject, sday);

     


    (async function (){
      try {
              const config = {
                headers: {
                  "Content-type": "application/json",
      
                }
              }
    
               
         console.log("oooo");
              const {data}=await axios.post('/api/admins/addschedule',
              { 
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
                steacher ,
                
                  course:course.coursename
                }
              
  
                    
               ,config)

        //  localStorage.setItem('schedule',JSON.stringify(data))
        
        navigate(`/schedule/${courseId.courseId}`)

         

              console.log("ooo",data)
            }catch(error){
              toast.error(error.response.data.message);
                  // console.error(error)
            }
    })();




  }



  return (
    <div>
      <div>
        <AdminSidebar />
        <div className='container ' >
          <div >
            <h3 style={{ color: "darkviolet", fontSize: "2rem" }} className="text-center mt-2">Add Schedule</h3>
          </div>
          <div className="reg-form-container"  >

            <form className="reg-form"
              onSubmit={handleSubmit}


            >
              <div className="reg-form-content">
                <div className="row 	appearance: none;
">
                  <div className='col-12 col-md-6'>
                    <label >Course : <b>{course.coursename}</b></label>

                  </div>
                </div>


                <div className="row ">
                  <div className='col-12 col-md-2'>
                    <div className="form-group mt-3">
                      

                      <select
                        type="text"

                        name=" day"
                        className='coursnamesub'
                        value={mday}
                        onChange={(e) => setDaym(e.target.value)}
                        style={{ width: "7rem", marginTop: "2rem", appearance: 'none' }}
                      >
                        <option value=''>Day</option>
                        <option value='Monday'>Monday</option>

                      </select>
                    </div>
                  </div>
                  <div className='col-12 col-md-4'>
                    <div className="form-group mt-3">
                      <label className='' >
                        Time
                      </label>
                      <div>
                        <TimePicker onChange={setStarttimem} value={mstarttime}
                        name='starttime '
                        />
                        to
                        <TimePicker onChange={setEndtimem} value={mendtime}
                         name='endtime'
                          className="clock"
                        />
                      </div>



                    </div>
                  </div>

                  <div className='col-12 col-md-3'>
                    <div className="form-group mt-3">
                      <label
                      > Subject</label>
                      <div>
                       <select
                        type="text"
                        placeholder="Course Name"
                        name="subject "
                        className='coursnamesub'
                        value={msubject}
                        onChange={(e) => setSubjectm(e.target.value)}

                      >
                        <option value="">Choose Subject</option>
                      {subjects.map((sub,index)=>
                              <option value={sub.subjectname} key={index}>{sub.subjectname}</option>
                      )}
                       

                      </select>
                      </div>
                      

                    </div>
                  </div>
                  <div className='col-12 col-md-3'>
                    <div className="form-group mt-3">
                      <label  >Teacher</label>
                      <div>
                      <select
                        type="text"
                        placeholder="Course Name"
                        name="teacher "
                        className='coursnamesub'
                        value={mteacher}
                        onChange={(e) => setTeacherm(e.target.value)}


                      >
                        <option value="">Choose Teacher</option>

                        
                        {/* {subjects.map((subject)=>
                            {teachers.map((teacher,index)=>
                              <option value={teacher.name} key={index}>{teacher.name}</option>
                                
                            )}
                        )} */}
                      
                   
                       {teachers.map((teacher,index)=>
                           
                        <option value={teacher.name} key={index}>{teacher.name}({teacher.subject})</option>
                       
                       
                   )}
                          
                   

                      </select>
                      </div>
                      

                    </div>
                  </div>


                </div>



                {/* 2 */}




                <div className="row ">
                  <div className='col-12 col-md-2'>
                    <div className="form-group mt-3">
                      

                      <select
                        type="text"

                        name="day "
                        className='coursnamesub'
                        value={tuday}
                        onChange={(e) => setDaytu(e.target.value)}
                        style={{ width: "7rem", marginTop: "2rem", appearance: 'none' }}
                      >
                        <option value=''>Day</option>
                         <option value='Tuesday'>Tuesday</option>

                      </select>
                    </div>
                  </div>
                  <div className='col-12 col-md-4'>
                    <div className="form-group mt-3">
                      <label className='' >
                        
                      </label>
                      <div>
                        <TimePicker onChange={setStarttimetu} value={tustarttime}
                        name='strarttime'
                        />
                        to
                        <TimePicker onChange={setEndtimetu} value={tuendtime}
                        name='endtime'
                          className="clock"
                        />
                      </div>



                    </div>
                  </div>

                  <div className='col-12 col-md-3'>
                    <div className="form-group mt-3">
                      <label
                      ></label>
                      <div>
                      <select
                        type="text"
                        placeholder="Course Name"
                        name="subject "
                        className='coursnamesub'
                        value={tusubject}
                        onChange={(e) => setSubjecttu(e.target.value)}

                      >
                        <option value="">Choose Subject</option>

                        {subjects.map((sub,index)=>
                              <option value={sub.subjectname} key={index}>{sub.subjectname}</option>
                      )}
                      </select>
                      </div>
                      

                    </div>
                  </div>
                  <div className='col-12 col-md-3'>
                    <div className="form-group mt-3">
                      <label  ></label>
                      <div>
                      <select
                        type="text"
                        placeholder="Course Name"
                        name="teacher "
                        className='coursnamesub'
                        value={tuteacher}
                        onChange={(e) => setTeachertu(e.target.value)}


                      >
                        <option value="">Choose Teacher</option>

                        {teachers.map((teacher,index)=>
                        <option value={teacher.name} key={index}>{teacher.name}({teacher.subject})</option>
                          
                      )}
                      </select>
                      </div>
                      

                    </div>
                  </div>


                </div>
    
              

              {/* 3 */}


              <div className="row ">
                  <div className='col-12 col-md-2'>
                    <div className="form-group mt-3">
                      

                      <select
                        type="text"

                        name="day "
                        className='coursnamesub'
                        value={wday}
                        onChange={(e) => setDayw(e.target.value)}
                        style={{ width: "7rem", marginTop: "2rem", appearance: 'none' }}
                      >
                        <option value=''>Day</option>
                       <option value='Wednesday'>Wednesday</option>

                      </select>
                    </div>
                  </div>
                  <div className='col-12 col-md-4'>
                    <div className="form-group mt-3">
                      <label className='' >
                        
                      </label>
                      <div>
                        <TimePicker onChange={setStarttimew} value={wstarttime}
                       name='starttime' />
                        to
                        <TimePicker onChange={setEndtimew} value={wendtime}
                         name='endtime'
                          className="clock"
                        />
                      </div>



                    </div>
                  </div>

                  <div className='col-12 col-md-3'>
                    <div className="form-group mt-3">
                      <label
                      ></label>
                      <div>
                      <select
                        type="text"
                        placeholder="Course Name"
                        name="subject "
                        className='coursnamesub'
                        value={wsubject}
                        onChange={(e) => setSubjectw(e.target.value)}

                      >
                        <option value="">Choose Subject</option>

                        {subjects.map((sub,index)=>
                              <option value={sub.subjectname} key={index}>{sub.subjectname}</option>
                      )}
                      </select>
                      </div>
                     

                    </div>
                  </div>
                  <div className='col-12 col-md-3'>
                    <div className="form-group mt-3">
                      <label  ></label>
                      <div>
                      <select
                        type="text"
                        placeholder="Course Name"
                        name="teacher "
                        className='coursnamesub'
                        value={wteacher}
                        onChange={(e) => setTeacherw(e.target.value)}


                      >
                        <option value="">Choose Teacher</option>

                        {teachers.map((teacher,index)=>
                        <option value={teacher.name} key={index}>{teacher.name}({teacher.subject})</option>
                          
                      )}
                      </select>
                      </div>
                      

                    </div>
                  </div>


                </div>



                {/* 4 */}
          
      



                <div className="row ">
                  <div className='col-12 col-md-2'>
                    <div className="form-group mt-3">
                      

                      <select
                        type="text"

                        name="day "
                        className='coursnamesub'
                        value={thday}
                        onChange={(e) => setDayth(e.target.value)}
                        style={{ width: "7rem", marginTop: "2rem", appearance: 'none' }}
                      >
                        <option value=''>Day</option>
                          <option value='Thursday'>Thursday</option>

                      </select>
                    </div>
                  </div>
                  <div className='col-12 col-md-4'>
                    <div className="form-group mt-3">
                      <label className='' >
                        
                      </label>
                      
                      <div>
                        <TimePicker onChange={setStarttimeth} value={thstarttime}
                        name='starttime'/>
                        to
                        <TimePicker onChange={setEndtimeth} value={thendtime}
                         name='endtime'
                          className="clock"
                        />
                      </div>



                    </div>
                  </div>

                  <div className='col-12 col-md-3'>
                    <div className="form-group mt-3">
                      <label
                      ></label>
                      <div>
                      <select
                        type="text"
                        placeholder="Course Name"
                        name="subject "
                        className='coursnamesub'
                        value={thsubject}
                        onChange={(e) => setSubjectth(e.target.value)}

                      >
                        <option value="">Choose Subject</option>

                        {subjects.map((sub,index)=>
                              <option value={sub.subjectname} key={index}>{sub.subjectname}</option>
                      )}
                      </select>
                      </div>
                      

                    </div>
                  </div>
                  <div className='col-12 col-md-3'>
                    <div className="form-group mt-3">
                      <label  ></label>
                      <div>
                      <select
                        type="text"
                        placeholder="Course Name"
                        name="teacher "
                        className='coursnamesub'
                        value={thteacher}
                        onChange={(e) => setTeacherth(e.target.value)}


                      >
                        <option value="">Choose Teacher</option>
                        {teachers.map((teacher,index)=>
                        <option value={teacher.name} key={index}>{teacher.name}({teacher.subject})</option>
                          
                      )}
                      </select>
                      </div>
                      

                    </div>
                  </div>


                </div>




                {/* 5 */}

                <div className="row ">
                  <div className='col-12 col-md-2'>
                    <div className="form-group mt-3">
                      

                      <select
                        type="text"

                        name="day "
                        className='coursnamesub'
                        value={fday}
                        onChange={(e) => setDayf(e.target.value)}
                        style={{ width: "7rem", marginTop: "2rem", appearance: 'none' }}
                      >
                        <option value=''>Day</option>
                         <option value='Friday'>Friday</option>

                      </select>
                    </div>
                  </div>
                  <div className='col-12 col-md-4'>
                    <div className="form-group mt-3">
                      <label className='' >
                        
                      </label>
                      <div>
                        <TimePicker onChange={setStarttimef} value={fstarttime}
                        name='starttime'/>
                        to
                        <TimePicker onChange={setEndtimef} value={fendtime}
                        name='endtime'
                          className="clock"
                        />
                      </div>



                    </div>
                  </div>

                  <div className='col-12 col-md-3'>
                    <div className="form-group mt-3">
                      <label
                      ></label>
                      <div>
                      <select
                        type="text"
                        placeholder="Course Name"
                        name="subject "
                        className='coursnamesub'
                        value={fsubject}
                        onChange={(e) => setSubjectf(e.target.value)}

                      >
                        <option value="">Choose Course</option>

                        {subjects.map((sub,index)=>
                              <option value={sub.subjectname} key={index}>{sub.subjectname}</option>
                      )}
                      </select>
                      </div>

                      

                    </div>
                  </div>
                  <div className='col-12 col-md-3'>
                    <div className="form-group mt-3">
                      <label  ></label>
                      <div>

                      <select
                        type="text"
                        placeholder="Course Name"
                        name="teacher "
                        className='coursnamesub'
                        value={fteacher}
                        onChange={(e) => setTeacherf(e.target.value)}


                      >
                        <option value="">Choose Teacher</option>

                        {teachers.map((teacher,index)=>
                        <option value={teacher.name} key={index}>{teacher.name}({teacher.subject})</option>
                          
                      )}
                      </select>

                      </div>
                     

                    </div>
                  </div>


                </div>

                {/* 6 */}


                <div className="row ">
                  <div className='col-12 col-md-2'>
                    <div className="form-group mt-3">
                      

                      <select
                        type="text"

                        name="day "
                        className='coursnamesub'
                        value={sday}
                        onChange={(e) => setDays(e.target.value)}
                        style={{ width: "7rem", marginTop: "2rem", appearance: 'none' }}
                      >
                        <option value=''>Day</option>
                     <option value='Saturday'>Saturday</option>

                      </select>
                    </div>
                  </div>
                  <div className='col-12 col-md-4'>
                    <div className="form-group mt-3">
                      <label className='' >
                       
                      </label>
                      <div>
                        <TimePicker onChange={setStarttimes} value={sstarttime}
                        name='starttime'/>
                        to
                        <TimePicker onChange={setEndtimes} value={sendtime}
                          name='endtime'
                          className="clock"
                        />
                      </div>



                    </div>
                  </div>

                  <div className='col-12 col-md-3'>
                    <div className="form-group mt-3">
                      <label
                      ></label>
                      <div>
                      <select
                        type="text"
                        placeholder="Course Name"
                        name="subject "
                        className='coursnamesub'
                        value={ssubject}
                        onChange={(e) => setSubjects(e.target.value)}

                      >
                        <option value="">Choose Subject</option>

                        {subjects.map((sub,index)=>
                              <option value={sub.subjectname} key={index}>{sub.subjectname}</option>
                      )}
                      </select>
                      </div>
                      

                    </div>
                  </div>
                  <div className='col-12 col-md-3'>
                    <div className="form-group mt-3">
                      <label  ></label>
                      <div>
                      <select
                        type="text"
                        placeholder="Course Name"
                        name="teacher "
                        className='coursnamesub'
                        value={steacher}
                        onChange={(e) => setTeachers(e.target.value)}


                      >
                        <option value="">Choose Teacher</option>

                        {teachers.map((teacher,index)=>
                        <option value={teacher.name} key={index}>{teacher.name}({teacher.subject})</option>
                          
                      )}
                      </select>
                      </div>
                      

                    </div>
                  </div>


                </div>







                <div className='row justify-content-between'>
                  <div className='mt-1 ml-5'>

                    <button type="submit" className="btn btn-primary  ">
                    {/* <Link to='/plusone' state={{value:course}}></Link> */}
                      Submit
                     
                    </button>

                  </div>

                </div>


              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AddSchedule
