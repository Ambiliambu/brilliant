import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import './Form.scss'
import {toast} from 'react-toastify'
import { Controller, useForm } from 'react-hook-form';



function EditSchedule() {
  
  const {
    register,
    handleSubmit,
    control,
    formState:{errors},}=useForm();

   const navigate=useNavigate()
  
  const courseId=useParams();
  // console.log("hh",courseId);
  const [schedule,setSchedule]=useState()
  const [teachers,setTeachers]=useState([])
  
  console.log("sche",schedule?.monday);


  useEffect(() => {
const admin=JSON.parse(localStorage.getItem('admin'))
    if(admin){
    (async function () {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",

          }
        }
        
      

       const { data } = await axios.get(`/api/admins/getschedule/${courseId.courseId}`, config);
        console.log("courseadd",data);
         setSchedule(data)

         const teacher=await axios.get(`/api/admins/courseteacher/${courseId.courseId}`,
         config)
         // console.log("courseadd",data);
          setTeachers(teacher.data)


      } catch (error) {
        console.error(error)
      }
    })();
    
  }else{
    navigate('/admin')
  }

  },[navigate])

  const onChange=(e)=>{
   e.preventDefault()
    console.log("k",e);
  }

const onSubmit=(datas)=>{

  datas.courseId=courseId.courseId;
  datas.createDate=new Date();
  datas.endDate=moment(datas.createDate, "DD-MM-YYYY").add(6, 'days');
   (async function (){
      try {
              const config = {
                headers: {
                  "Content-type": "application/json",
      
                }
              }            
         console.log("oooo" );
           
              const {data}=await axios.patch(`/api/admins/editschedule/${courseId.courseId}`,
              datas,
              config)

        // navigate(`/schedule/${courseId.courseId}`)
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
              onSubmit={handleSubmit(onSubmit)}


            >
              <div className="reg-form-content">
                <div className="row 	appearance: none;
">
                  <div className='col-12 col-md-6'>
                    {/* <label >Course : <b>{teachers.courseId.coursename}</b></label> */}

                  </div>
                </div>


                <div className="row ">
                  <div className='col-12 col-md-2'>
                    <div className="form-group mt-3">
                      

                      <select
                        type="text"

                        name=" day"
                        className='coursnamesub'
                        // value={mday}
                        // onChange={(e) => setDaym(e.target.value)}
                        style={{ width: "7rem", marginTop: "2rem", appearance: 'none',textAlign:"center" }}
                      >
                        <option value='Monday'> Monday</option>

                      </select>
                    </div>
                  </div>
                  <div className='col-12 col-md-4'>
                    <div className="form-group mt-3">
                      <label className='' >
                        Time
                      </label>

                      <div>
                        
                       
                         <Controller
                        control={control}
                        placeholder={schedule?.monday?.startTime}
                        name="monday.startTime"
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                          <TimePicker
                            onChange={onChange}
                            onBlur={onBlur}
                            selected={value}
                             disableClock
                             
                          />
                        )}
                      />
                          to
                         <Controller
                        control={control}
                        name="monday.endTime"
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                          <TimePicker
                            onChange={onChange}
                            onBlur={onBlur}
                            selected={value} 
                             disableClock
                             

                          />
                        )}
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
                        name="monday.subjectId"
                        className='coursnamesub'
                        {...register("monday.subjectId")}
                      

                        // onChange={(e) => setSubjectm(e.target.value)}

                      >
                        <option value=''>Choose Subject</option>
                      {teachers.map((obj,index)=>
                              <option value={obj.subjectId._id} key={index}>{obj.subjectId.subjectname}</option>
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
                        name="monday.teacherId"
                        className='coursnamesub'
                        {...register("monday.teacherId")}
                        // value={mteacher}
                        // onChange={(e) => setTeacherm(e.target.value)}


                      >
                        <option value="" >Choose Teacher</option> 
                    
                       {teachers.map((teacher,index)=>
                           
                        <option value={teacher._id} key={index}>{teacher.name}({teacher.subjectId.subjectname})</option>
                       
                       
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
                        // value={tuday}
                        // onChange={(e) => setDaytu(e.target.value)}
                        style={{ width: "7rem", marginTop: "2rem", appearance: 'none' ,textAlign:"center" }}
                      >
                       
                         <option value='Tuesday'> Tuesday</option>

                      </select>
                    </div>
                  </div>
                  <div className='col-12 col-md-4'>
                    <div className="form-group mt-3">
                      <label className='' >
                        
                      </label>
                      <div>
                      <Controller
                        control={control}
                        name="tuesday.startTime"
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                          <TimePicker
                            onChange={onChange}
                            onBlur={onBlur}
                            selected={value}
                             disableClock
                             
                          />
                        )}
                      />
                          to
                         <Controller
                        control={control}
                        name="tuesday.endTime"
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                          <TimePicker
                            onChange={onChange}
                            onBlur={onBlur}
                            selected={value}
                             disableClock
                             
                          />
                        )}
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
                        name="tuesday.subjectId"
                        className='coursnamesub'
                        {...register("tuesday.subjectId")}
                        // value={tusubject}
                        // onChange={(e) => setSubjecttu(e.target.value)}

                      >
                       <option value="">Choosse Subject </option>

                        {teachers.map((obj,index)=>
                              <option value={obj.subjectId._id} key={index}>{obj.subjectId.subjectname}</option>
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
                        name="tuesday.teacherId"
                        className='coursnamesub'
                        {...register("tuesday.teacherId")}
                        // value={tuteacher}
                        // onChange={(e) => setTeachertu(e.target.value)}


                      >
                        <option value="">Choosse Teacher</option>

                        {teachers.map((teacher,index)=>
                        <option value={teacher._id} key={index}>{teacher.name}({teacher.subjectId.subjectname})</option>
                          
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
                        // value={wday}
                        // onChange={(e) => setDayw(e.target.value)}
                        style={{ width: "7rem", marginTop: "2rem", appearance: 'none',textAlign:"center"  }}
                      >
                        
                       <option value='Wednesday'> Wednesday</option>

                      </select>
                    </div>
                  </div>
                  <div className='col-12 col-md-4'>
                    <div className="form-group mt-3">
                      <label className='' >
                        
                      </label>
                      <div>
                      <Controller
                        control={control}
                        name="wednesday.startTime"
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                          <TimePicker
                            onChange={onChange}
                            onBlur={onBlur}
                            selected={value}
                             disableClock
                             
                          />
                        )}
                      />
                          to
                         <Controller
                        control={control}
                        name="wednesday.endTime"
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                          <TimePicker
                            onChange={onChange}
                            onBlur={onBlur}
                            selected={value}
                             disableClock
                             
                          />
                        )}
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
                        name="wednesday.subjectId"
                        className='coursnamesub'
                        {...register("wednesday.subjectId")}
                        // value={wsubject}
                        // onChange={(e) => setSubjectw(e.target.value)}

                      >
                       <option value="">Choosse Subject </option>

                        {teachers.map((obj,index)=>
                              <option value={obj.subjectId._id} key={index}>{obj.subjectId.subjectname}</option>
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
                        name="wednesday.teacherId"
                        className='coursnamesub'
                        {...register("wednesday.teacherId")}
                        // value={courseId.courseId}
                        // onChange={onChange}


                      >
                        <option value="">Choosse Teacher  </option>

                        {teachers.map((teacher,index)=>
                        <option value={teacher._id} key={index}>{teacher.name}({teacher.subjectId.subjectname})</option>
                          
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
                        // value={thday}
                        // onChange={(e) => setDayth(e.target.value)}
                        style={{ width: "7rem", marginTop: "2rem", appearance: 'none',textAlign:"center"  }}
                      >
                       
                          <option value='Thursday'> Thursday</option>

                      </select>
                    </div>
                  </div>
                  <div className='col-12 col-md-4'>
                    <div className="form-group mt-3">
                      <label className='' >
                        
                      </label>
                      
                      <div>
                      <Controller
                        control={control}
                        name="thursday.startTime"
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                          <TimePicker
                            onChange={onChange}
                            onBlur={onBlur}
                            selected={value}
                             disableClock
                             
                          />
                        )}
                      />
                          to
                         <Controller
                        control={control}
                        name="thursday.endTime"
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                          <TimePicker
                            onChange={onChange}
                            onBlur={onBlur}
                            selected={value}
                             disableClock
                             
                          />
                        )}
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
                        name="thursday.subjectId"
                        className='coursnamesub'
                        {...register("thursday.subjectId")}
                        // value={thsubject}
                        // onChange={(e) => setSubjectth(e.target.value)}

                      >
                       <option value="">Choosse Subject  </option>

                        {teachers.map((obj,index)=>
                              <option value={obj.subjectId._id} key={index}>{obj.subjectId.subjectname}</option>
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
                        name="thursday.teacherId"
                        className='coursnamesub'
                        {...register("thursday.teacherId")}
                        // value={thteacher}
                        // onChange={(e) => setTeacherth(e.target.value)}


                      >
                        <option value="">Choosse Teacher  </option>
                        {teachers.map((teacher,index)=>
                        <option value={teacher._id} key={index}>{teacher.name}({teacher.subjectId.subjectname})</option>
                          
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
                        // value={fday}
                        // onChange={(e) => setDayf(e.target.value)}
                        style={{ width: "7rem", marginTop: "2rem", appearance: 'none',textAlign:"center"  }}
                      >
                     
                         <option value='Friday'> Friday</option>

                      </select>
                    </div>
                  </div>
                  <div className='col-12 col-md-4'>
                    <div className="form-group mt-3">
                      <label className='' >
                        
                      </label>
                      <div>
                      <Controller
                        control={control}
                        name="friday.startTime"
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                          <TimePicker
                            onChange={onChange}
                            onBlur={onBlur}
                            selected={value}
                             disableClock
                             
                          />
                        )}
                      />
                          to
                         <Controller
                        control={control}
                        name="friday.endTime"
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                          <TimePicker
                            onChange={onChange}
                            onBlur={onBlur}
                            selected={value}
                             disableClock
                             
                          />
                        )}
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
                        name="friday.subjectId"
                        className='coursnamesub'
                        {...register("friday.subjectId")}
                        // value={fsubject}
                        // onChange={(e) => setSubjectf(e.target.value)}

                      >
                       <option value="">Choosse Subject  </option>

                        {teachers.map((obj,index)=>
                              <option value={obj.subjectId._id} key={index}>{obj.subjectId.subjectname}</option>
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
                        name="friday.teacherId"
                        className='coursnamesub'
                        {...register("friday.teacherId")}

                        // value={fteacher}
                        // onChange={(e) => setTeacherf(e.target.value)}


                      >
                        <option value="">Choosse Teacher </option>

                        {teachers.map((teacher,index)=>
                        <option value={teacher._id} key={index}>{teacher.name}({teacher.subjectId.subjectname})</option>
                          
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
                        // value={sday}
                        // onChange={(e) => setDays(e.target.value)}
                        style={{ width: "7rem", marginTop: "2rem", appearance: 'none',textAlign:"center"  }}
                      >
                        
                     <option value='Saturday'> Saturday</option>

                      </select>
                    </div>
                  </div>
                  <div className='col-12 col-md-4'>
                    <div className="form-group mt-3">
                      <label className='' >
                       
                      </label>
                      <div>
                      <Controller
                        control={control}
                        name="saturday.startTime"
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                          <TimePicker
                            onChange={onChange}
                            onBlur={onBlur}
                            selected={value}
                             disableClock
                             
                          />
                        )}
                      />
                          to
                         <Controller
                        control={control}
                        name="saturday.endTime"
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                          <TimePicker
                            onChange={onChange}
                            onBlur={onBlur}
                            selected={value}
                             disableClock
                             
                          />
                        )}
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
                        name="saturday.subjectId"
                        className='coursnamesub'
                        {...register("saturday.subjectId")}
                        // value={ssubject}
                        // onChange={(e) => setSubjects(e.target.value)}

                      >
                       <option value="">Choosse Subject </option>

                        {teachers.map((obj,index)=>
                              <option value={obj.subjectId._id} key={index}>{obj.subjectId.subjectname}</option>
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
                        name="saturday.teacherId"
                        className='coursnamesub'
                        {...register("saturday.teacherId")}
                        // value={steacher}
                        // onChange={(e) => setTeachers(e.target.value)}


                      >
                        <option value="">Choose Teacher </option>

                        {teachers.map((teacher,index)=>
                        <option value={teacher._id} key={index}>{teacher.name}({teacher.subjectId.subjectname})</option>
                          
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

export default EditSchedule
