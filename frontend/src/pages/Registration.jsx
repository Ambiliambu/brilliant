import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Header from '../components/Header'
import Spinner from '../components/Spinner'
// import { studentEntry,reset } from '../features/auth/user/student/studentSlice'
import './Form.scss'

function Registration() {

  const {
    register,
    handleSubmit,
    formState:{errors},}=useForm();

    const [course,setCourse]=useState([]);
    const [student,setStudent]=useState('')
    const navigate=useNavigate()

  

    useEffect(()=>{
      const student=JSON.parse(localStorage.getItem('student'))
      setStudent(student)
 if(student){
  
    (async function(){
         try {
             const config={
               headers:{
                 "Content-type": "application/json",
       
               }
             }
             const {data}=await axios.get('/api/admins/getcourses',config)
             console.log("ff",data);
             setCourse(data)

            }catch(error){
              console.error(error);
            }
            })();

    

    }else{
      navigate('/login')
    }
    },[navigate])




  const onSubmit=(data)=>{
    const {parentsname,parentsnumber,course}=data
    navigate('/payment',{state:{
      parentsname,
      parentsnumber,
      courseId:course,
    }})
 
  }


  
  return (

    <div>


      <Header/>
    <div>
    {/* <div className='bg-secondary  '>
      <Link to='/'>
      <span className='h5 m-2 text-primary'><FaArrowCircleLeft/></span>
      </Link>
  
          </div> */}
          
      <div className='container ' >
       
        <div className="reg-form-container"  >

         
              <form className="reg-form"
               onSubmit={handleSubmit(onSubmit)} 
              >
                 <div >
          <h3 style={{ color: "darkviolet", fontSize: "2rem" }} className="text-center mt-2">Student Registration</h3>
        </div>
                <div className="reg-form-content">
                  <div className="row ">
                    <div className='col-12 col-md-4'>
                  <div className="form-group mt-3">
                    <label>Name : <b>{student.name}</b></label>


                  </div>
                  </div>
                  
                  <div className='col-12 col-md-4'>
                  <div className="form-group mt-3">
                    <label>Email Address :<b>{student.email}</b> </label>
                  

                  </div>
                  </div>
                  <div className='col-12 col-md-4'>
                  <div className="form-group mt-3">
                    <label>Phone Number :<b>{student.phonenumber}</b> </label>
                  

                  </div>
                  </div>
                  </div>
                  <div className="row ">
                    <div className='col-12 col-md-4'>
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
                  <div  className='col-12 col-md-4'>
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
                  <div  className='col-12 col-md-4'>
                  <div className="form-group mt-3">
                     <label className="form-label">Courses</label>
                    <br />
                    {course.map((obj,index)=>
              <div key={index}>
                    <input
                name="course"
                type="radio"
                value={obj._id}
                {...register("course")}
                required
                
              />
              <span className="radio-selection"> {obj.coursename}</span>
              </div>
            )}

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
