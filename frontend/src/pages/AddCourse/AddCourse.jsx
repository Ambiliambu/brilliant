import axios from 'axios';
import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../../components/AdminSidebar';
import "./AddCourse.css";

function AddCourse() {

  const navigate=useNavigate()
 
const {
    register,
    handleSubmit,
    formState:{errors},} = useForm();

    const onSubmit=async(data)=>{
      const {coursename,courseamount}=data
      console.log("uu",data);

      try {
        const config={
          header:{
            "Content-type":"application/json"
          }
        };
        console.log("uu");
        const course= await axios.post('/api/admins/addcourse',{
          coursename,
          courseamount
          
        },
        config);
        console.log("gg",course);

        localStorage.setItem('course',JSON.stringify(course))
        navigate('/course')
      } catch (error) {
       
        console.error(error)
      }
    }



    return (
    <div>
      <AdminSidebar/>
    <Container>
      
        <Row>
        <div className="addcourse">
  <div className="addcourseform">

   
    <form className="addcourse-form" onSubmit={handleSubmit(onSubmit)}  >
      <span className="material-icons"  style={{fontSize:"35px"}}>Add Course</span>

      <input 
      type="text" 
      placeholder="Course Name" 
      name="coursename"
     
      {...register('coursename', { required: {value:true,message:" Course Name is required"},
      minLength:{value:3,message:"Enter the valid name"},
      maxLength:{value:100,message:"Enter the valid name"},
      pattern:{value:/^[a-zA-Z '.-]*$/ ,message:"Enter valid name"}
    
    })}
      />
    <p  style={{ color: "crimson" }}>{errors.coursename?.message}</p>
    

      <input 
      type="number" 
      placeholder="Course Amount" 
       pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
      
      name="courseamount"
      {...register('courseamount', { required: {value:true,message:"Amount is required" }},
      )}
      />
       <p  style={{ color: "crimson" }}>{errors.courseamount?.message}</p>

     

   
      <button type="submit">Submit</button>
    </form>  
  </div>
</div>
        </Row>
    </Container>

    </div>
  )
}

export default AddCourse
