import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Spinner from '../components/Spinner'
import {teacherEntry,reset} from '../features/auth/teacher/teacherSlice'
import { toast } from 'react-toastify'
import AdminSidebar from '../components/AdminSidebar'
import axios from 'axios'


function AddTeacher() {
    const {
        register,
        handleSubmit,
        formState:{errors},}=useForm();

        const navigate=useNavigate()
        const dispatch=useDispatch()
        const {teacher,isLoading,isError,isSuccess,message }=useSelector(
            (state)=>state.teacherauth
            )

      const [course,setCourse]=useState([])
      const [subject,setSubject]=useState([])




            useEffect(()=>{

              (async function(){
                try {
                    const config={
                      headers:{
                        "Content-type": "application/json",
              
                      }
                    }
                    const {data}=await axios.get('/api/admins/getcourses',config)
                    // console.log("courseadd",data);
                   setCourse(data)
                   const subjects=await axios.get('/api/admins/getsubjects',config)
                   setSubject(subjects.data)
                  
        
                  } catch (error) {
                    console.error(error)
                  }
                })();




                if (isError){
                  toast.error(message)
                }
                if(isSuccess  ){
                  navigate('/teacher')
                }
          
                dispatch(reset())
          
              },[isError,isSuccess,message,navigate,dispatch])
          
            const onSubmit=(data)=>{
              let day=new Date()
              data.createdate=day
              console.log("teacher data",data);
              dispatch(teacherEntry(data))
           
            }
          
            if(isLoading){
              return <Spinner/>
            }
  return (
    <div>
      

    <div>
      <AdminSidebar/>
      <div className='container ' >
        <div >
          <h3 style={{ color: "darkviolet", fontSize: "2rem" }} className="text-center mt-2">Add Teacher</h3>
        </div>
        <div className="reg-form-container"  >
         
              <form className="reg-form"
               onSubmit={handleSubmit(onSubmit)} 
              >
                <div className="reg-form-content">
                  <div className="row ">
                    <div className='col-12 col-md-5'>
                  <div className="form-group mt-3">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      id="name"
                      name="name"
                      {...register('name', { required: {value:true,message:"Name is required"},
              minLength:{value:3,message:"Enter the valid name"},
              pattern:{value:/^[a-zA-Z '.-]*$/ ,message:"Enter valid name"}
            
            })}
                    />
           <p  style={{ color: "crimson" }}>{errors.name?.message}</p>

                  </div>
                  </div>
                  
                  <div className='col-12 col-md-5'>
                  <div className="form-group mt-3">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className="form-control mt-1"
                      id="email"
                      name="email"
                      {...register('email', { required: {value:true,message:"Email is required" }},
                      )}
                    />
          <p  style={{ color: "crimson" }}>{errors.email?.message}</p>

                  </div>
                  </div>
                  </div>
                  <div className="row ">
                    <div className='col-12 col-md-5'>
                  <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                      type="Password"
                      className="form-control mt-1"
                      id='password'
                      name='password'
                      {...register('password', { required: {value:true,message:"Password is required"},
                      minLength:{value:3,message:"Enter the valid password"},
                      maxLength:{value:6,message:'Enter the valid password'}
                    
                    })}

                    />
           <p  style={{ color: "crimson" }}>{errors.passord?.message}</p>

                  </div>
                  </div>

{/*                   
                  </div>
                  <div className='row'> */}
                    <div className='col-12 col-md-5'>
                  <div className="form-group mt-3">
                    <label>Phone Number</label>
                    <input
                      type="number"
                      className="form-control mt-1"
                      id="phonenumber"
                      name="phonenumber"
                      {...register('phonenumber', {required:{value:true,message:"  Phone Number is required"},
                      maxLength: { value: 10, message: "Enter the valid Phone number " },
                      minLength: { value: 10, message: "Enter the valid Phone number " },
                      pattern: { value: /^[0-9+-]+$/, message: "Enter valid Phone number " }
    
                    })}
                    />
              <p style={{ color: "crimson" }}>{errors.phonenumber?.message}</p>

                  </div>
                  </div>
                  

                  </div>
                 




          <div className='row'>
            <div className="col-4">
              <label className="form-label">Courses</label>
              <br />
            {course.map((obj,i)=>
            <div key={i}>
               <input
                name="courseId"
                type="radio"
                value={obj._id}
                {...register("courseId")}
                required
                
              />
              <span className="radio-selection"> {obj.coursename}</span>
              <br />
            </div>
            
            )}
            
             
              
            </div>
            <div className="col-4 ">
              <label className="form-label">Subjects</label>
              <br />
            {subject.map((obj,index)=>
            <div key={index}>
               <input
                name="subjectId"
                type="radio"
                value={obj._id}
                {...register("subjectId")}
                required
                
              />
              <span className="radio-selection"> {obj.subjectname}</span>
              <br />
            </div>
            
            )}
            
             
              
            </div>
          </div>
               

                  <div className='row justify-content-between'>
                  <div className='mt-1 ml-3'>

                      <button type="submit" className="btn btn-primary  ">
                        
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

export default AddTeacher
