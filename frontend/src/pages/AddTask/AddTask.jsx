
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import TeacherHeader from '../../components/TeacherHeader';
import './AddTask.css'



function AddTask() {
    const navigate=useNavigate()
    

const {
    register,
    handleSubmit,
    formState:{errors},} = useForm();

  const teacher=JSON.parse(localStorage.getItem('teacher'))

const onSubmit=async(data)=>{
  console.log("ff",data,teacher);
  try {
    const config={
      header:{
        "Content-type":"application/json"
      }
    };
    console.log("uu",data);
    const endDate=data.endDate
    console.log("yy",data.task);
    const formData=new FormData();
    for(let i=0;i<data.task.length;i++){
      formData.append('tasks',data.task[i])
    }
    // formData.append('tasks',data.task[0])

    formData.append('endDate',data.endDate)
    formData.append('name',data.name)
    formData.append('teacherId',teacher._id)
    formData.append('courseId',teacher.courseId?._id)
    formData.append('subjectId',teacher.subjectId?._id)



    console.log("ppp",formData);

   
     axios.post('/api/users/addtask',formData,
    
    config);
    // console.log("gggggggg",task);

     navigate('/task')
  }catch(error){
    
    toast.error(error.response.data.message)

    // toast.error("Something went wrong")
  }



}




return (
<div>
  <TeacherHeader/>
<Container>
  
    <Row>
    <div className="addtask">
<div className="addtaskform">


<form className="addcourse-form" 
onSubmit={handleSubmit(onSubmit)} 
 >
  <span className="material-icons"  style={{fontSize:"35px"}}>Add Task</span>

    <input 
    type='file' 
    className='' 
    id='customFile' 
    name='task'
    multiple
    {...register('task', { required: {value:true,message:"file is required" }},
    )}
      />


<p  style={{ color: "crimson" }}>{errors.task?.message}</p>


  <input 
  type="Date" 
  name="endDate"
  {...register('endDate', { required: {value:true,message:"Date is required" }},
  )}
  />

    <p  style={{ color: "crimson" }}>{errors.endDate?.message}</p>


    <input 
  type="text" 
  name="name"
  placeholder='Task name'
  {...register('name', { required: {value:true,message:"name is required" }},
  )}
  />
    <p  style={{ color: "crimson" }}>{errors.name?.message}</p>

  <button type="submit">Submit</button>
</form>  
</div>
</div>
    </Row>
</Container>

</div>
)
}

export default AddTask
