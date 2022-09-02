import { useState,useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {registerUser,reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import './Form.scss'
import Header from '../components/Header'
import {useForm} from 'react-hook-form'

function Register() {
   
 
  const {
    register,
    handleSubmit,
    formState:{errors},}=useForm();

  const navigate=useNavigate()
  const dispatch=useDispatch()

  const {user,isLoading,isError,isSuccess,message }=useSelector(
    (state)=>state.auth
    )


    useEffect(()=>{
      if (isError){
        toast.error(message)
      }
      if(isSuccess){
        navigate('/')
      }

      dispatch(reset())

    },[isError,isSuccess,message,navigate,dispatch])


 

 

 const onSubmit=async(data)=>{
 
       dispatch(registerUser(data))
  }

 



  if(isLoading){
    return <Spinner/>
  }

  return (
   <div>
    <Header/>
   <div className='container'>
     <div className="Auth-form-container">
     <div className="row justify-content-between">
      <div className='col-12 col-md-6'>
      <form className="Auth-form" onSubmit={handleSubmit(onSubmit)} >
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register</h3>
         
          <div className="form-group mt-3">
            {/* <label> Name</label> */}
            <input
              type="text"
              className="form-control mt-1"
              id="name"
              name="name"
              placeholder="Enter your name"
              {...register('name', { required: {value:true,message:"Name is required"},
              minLength:{value:3,message:"Enter the valid name"},
              pattern:{value:/^[a-zA-Z '.-]*$/ ,message:"Enter valid name"}
            
            })}
            />
           <p  style={{ color: "crimson" }}>{errors.name?.message}</p>

          </div>

          <div className="form-group mt-3">
            {/* <label>Email Address</label> */}
            <input
              type="email"
              className="form-control mt-1"
              id="email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
              placeholder="Email Address"
              {...register('email', { required: {value:true,message:"Email is required" }},
               )}
            />
          <p  style={{ color: "crimson" }}>{errors.email?.message}</p>

          </div>

          <div className="form-group mt-3">
            {/* <label>Password</label> */}
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
              SignUp
            
            </button>
            
           </div>
          
           </div>
         
        </div>
      </form>
         <div className='row justify-content-between'>
          <div>

          </div>
          <div className="d-grid gap-2  ml-3 ">
            <h6 className=''>Do have an account?</h6>
            <button type="submit" className="btn btn-primary ">
              <Link to='/login'>Login</Link>
            
            </button>
         
        
          </div>
          </div>
      </div>
      </div>
    </div>
   </div>
   </div>
  )
}

export default Register



