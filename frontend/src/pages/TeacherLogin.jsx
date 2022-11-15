import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import Spinner from '../components/Spinner'
import './Form.scss'
import Header from '../components/Header'
import { useForm } from 'react-hook-form'
import { teacherlogin ,reset} from '../features/auth/teacher/teacherSlice'


function TeacherLogin() {
   

  const {
    register,
    handleSubmit,
    formState: { errors }, } = useForm();


  const navigate=useNavigate()
  const dispatch=useDispatch()


  const {teacher,isLoading,isError,isSuccess,message }=useSelector(
    (state)=>state.teacherauth
    )
    // console.log("teacher",teacher);

    useEffect(()=>{
  
    if(isError){
      toast.error(message)

    }
    if(isSuccess && teacher){
      
      if(teacher.status===true){
       navigate('/')
      }
    else{
      navigate('/teacherlogin')
      toast.error("Teacher Blocked") 

    }
  }
  
    

    },[teacher,navigate])



 


  const onSubmit=(data)=>{
   console.log("pppp",data);

    dispatch(teacherlogin(data))
  }

  if(isLoading){
    return <Spinner/>
  }

  return (
    <div>
      <Header/>
   <div className='container ' >
     <div className="teacherlogin-form-container"  >
      <div className="row justify-content-between">
      <div className='col-12 col-md-6'>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)} >
        <div className="login-form-content">
          <h3 className="login-form-title"> Teacher Login</h3>
          <div className="text-center">
         
          </div>
          
          <div className="form-group mt-3">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control mt-1"
              id="email"
              name="email"         
              placeholder="Email Address"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
              {...register('email', { required: {value:true,message:"Email is required" }},
               )}
            
            />
          <p  style={{ color: "crimson" }}>{errors.email?.message}</p>

          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              id='password'
              name='password'            
              placeholder=" Enter your password"
              {...register('password', { required: {value:true,message:"Password is required"},
              minLength:{value:3,message:"Password must be at least 3 character"},
              maxLength:{value:6,message:"Password cannot exceed more than 6 character"},
              })}

            />
         <p  style={{ color: "crimson" }}>{errors.password?.message}</p>      

          </div>
         <div className='row justify-content-between'>
         
          <div className='mt-1 ml-3'>
         
           <button type="submit" className="btn btn-primary  ">
              Login
            
            </button>
            
           </div>
          
           </div>
           
         
        </div>
      </form>
      <div className='row justify-content-between'>
          <div>

          </div>
          
          </div>
      </div>
     
      </div>
    </div>
   </div>
   </div>
  )
}

export default TeacherLogin



