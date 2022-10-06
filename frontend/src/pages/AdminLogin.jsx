import { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {adminlogin,reset} from '../features/auth/admin/adminAuthSlice'
import Spinner from '../components/Spinner'
import './Form.scss'


function AdminLogin() {
   
  const [formData,setFormData]=useState({
    
    email:'',
    password:'',
   
  })


  const {email,password}=formData


  const navigate=useNavigate()
  const dispatch=useDispatch()

  const {admin,isLoading,isError,isSucess,message }=useSelector(
    (state)=>state.adminauth
    )



    useEffect(()=>{
        if (isError){
          toast.error(message)
        }
  
        if(isSucess || admin){
          navigate('/student')
        }
  
        dispatch(reset())
  
      },[admin,isError,isSucess,message,navigate,dispatch])

  const onChange=(e)=>{
    setFormData((prevState)=>({
           ...prevState,
           [e.target.name]:e.target.value
    }))
  }

  const onSubmit=(e)=>{
    e.preventDefault()

    const adminData={
        email,
        password
    }
    dispatch(adminlogin(adminData))
  }


  if(isLoading){
    return <Spinner/>
  }

  return (
   <div className='container ' >
   
     <div className="adminlogin-form-container "  >
      <div className="row justify-content-between">
      <div className='col-12 col-md-6'>
      <form className="adminlogin-form" onSubmit={onSubmit} >
        <div className="adminlogin-form-content">
          <h3 className="adminlogin-form-title">Login</h3>
          <div className="text-center">
         
          </div>
          
          <div className="form-group mt-3">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control mt-1"
              id="email"
              name="email"
              value={email}
              placeholder="Email Address"
              onChange={onChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              id='password'
              name='password'
              value={password}
              placeholder=" Enter your password"
              onChange={onChange}

            />
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

     

      </div>
     
      </div>
    </div>
   </div>
  )
}

export default AdminLogin



