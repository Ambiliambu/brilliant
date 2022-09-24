import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Header from '../components/Header'
import Spinner from '../components/Spinner'
import { studentEntry,reset } from '../features/auth/user/student/studentSlice'
import './Form.scss'

function Registration() {

  const {
    register,
    handleSubmit,
    formState:{errors},}=useForm();

    const [course,setCourse]=useState([]);
    // const [userinfo,setUser]=useState('')
  
    const navigate=useNavigate()
  const dispatch=useDispatch()

  const {student,isLoading,isError,isSuccess,message }=useSelector(
    (state)=>state.studentauth
    )

    const {user}=useSelector(
      (state)=>state.auth
      )

    useEffect(()=>{


 if(user){
  
    (async function(){
         try {
             const config={
               headers:{
                 "Content-type": "application/json",
       
               }
             }
             const {data}=await axios.get('/api/admins/getcourses',config)
            //  console.log("ff",data);
             setCourse(data)

            }catch(error){
              console.error(error);
            }
            })();

      if (isError){
        toast.error(message)
      }
      if(isSuccess ){
        navigate('/payment')
      }

      dispatch(reset())
    }else{
      navigate('/login')
    }
    },[isError,isSuccess,message,navigate,dispatch])




  const onSubmit=(data)=>{
   
    data.userId=user._id;
    console.log(data);
    dispatch(studentEntry(data))
 
  }

  if(isLoading){
    return <Spinner/>
  }
  
  return (

    <div>

      <Header/>
    <div>
      <div className='container ' >
        <div >
          <h3 style={{ color: "darkviolet", fontSize: "2rem" }} className="text-center mt-2">Student Registration</h3>
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
                    <label>Parent's Name</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      id='parentsname'
                      name='parentsname'
                      {...register('parentsname', { required: {value:true,message:"Parent's name is required"},
                      minLength:{value:3,message:"Enter the valid name"},
                      pattern:{value:/^[a-zA-Z '.-]*$/ ,message:"Enter valid name"}
                    
                    })}

                    />
           <p  style={{ color: "crimson" }}>{errors.parentsname?.message}</p>

                  </div>
                  </div>
                  <div  className='col-12 col-md-5'>
                  <div className="form-group mt-3">
                    <label>Parent's Number</label>
                    <input
                      type="number"
                      className="form-control mt-1"
                      id="parentsnumber"
                      name="parentsnumber"
                      {...register('parentsnumber', {required:{value:true,message:" Parent's Phone Number is required"},
                      maxLength: { value: 10, message: "Enter the valid Phone number " },
                      minLength: { value: 10, message: "Enter the valid Phone number " },
                      pattern: { value: /^[0-9+-]+$/, message: "Enter valid Phone number " }
    
                    })}
                    />
              <p style={{ color: "crimson" }}>{errors.parentsnumber?.message}</p>
                    
                  </div>
                  </div>
                  </div>
                  <div className='row'>
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
                  <div className='col-12 col-md-6'>
                  <div className="form-group mt-3">
                  <div className='row'>
                  <div className="col-5 ">
                    <label className="form-label">Courses</label>
                    <br />
                    {course.map((obj)=>
              <div>
                    <input
                name="course"
                type="radio"
                value={obj.coursename}
                {...register("course")}
                required
                
              />
              <span className="radio-selection"> {obj.coursename}</span>
              </div>
            )}
              <br />

                    </div>
                    </div>

                  </div>
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

export default Registration
