import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../../components/AdminSidebar';
import "./AddSubject.css";
import {toast} from 'react-toastify'


function AddSubject() {

  const navigate=useNavigate()

 const [course,setCourse]=useState([])

useEffect(()=>{
  const admin=JSON.parse(localStorage.getItem('admin'))
// console.log("admin",admin);
if(admin){


  (async function(){
    try {
        const config={
          headers:{
            "Content-type": "application/json",
  
          }
        }
        const {data}=await axios.get('/api/admins/getcourses',config)
        // console.log("hhh",data);
       
        setCourse(data)
      

      } catch (error) {
        console.error(error)
      }
    })();

  }else{
    navigate('/adminlogin')
  }



},[])


const {
    register,
    handleSubmit,
    formState:{errors},} = useForm();

    const onSubmit=async(data)=>{
      console.log("uujj",data);

      const {courseId,subjectname}=data

      try {
        const config={
          header:{
            "Content-type":"application/json"
          }
        };
        console.log("uu");
        
        

        const subject= await axios.post('/api/admins/addsubject',{
          courseId,
          subjectname
          
        },
        config);
        console.log("ggggg",subject);

        localStorage.setItem('subject',JSON.stringify(subject))
        navigate('/subject')
      } catch (error) {
        toast.error(error.response.data.message)
        // console.error(error)
      }
    }



    return (
    <div>
      <AdminSidebar/>
    <Container>
      
        <Row>
        <div className="addsubject">
  <div className="addsubjectform m-3">

   
    <form className="addsubject-form" onSubmit={handleSubmit(onSubmit)}  >
      <span className="material-icons"  style={{fontSize:"35px"}}>Add Subject</span>
<br/>
      <select
      type="text" 
      placeholder="Course Name" 
      name="courseId "
      className='coursnamesub'
      
      {...register('courseId', { required: {value:true,message:" Course Name is required"},
     
    
    })}
      >
       <option value="">Choose Course</option>
       {course.map((obj,key)=>
      //  <label key={key}></label>
             <option value={obj._id}>{obj.coursename}</option>
             
       )}
      
       




      </select>
    <p  style={{ color: "crimson" }}>{errors.courseId?.message}</p>
    

      <input 
      type="text" 
      placeholder="Subject Name" 
      
      name="subjectname"
      {...register('subjectname', { required: {value:true,message:"Subject is required" },
      minLength:{value:3,message:"Enter the valid name"},
      maxLength:{value:100,message:"Enter the valid name"},
      pattern:{value:/^[a-zA-Z '.-]*$/ ,message:"Enter valid name"}
})}
      />
       <p  style={{ color: "crimson" }}>{errors.subjectname?.message}</p>

     

   
      <button type="submit">Submit</button>
    </form>  
  </div>
</div>
        </Row>
    </Container>

    </div>
  )
}

export default AddSubject
