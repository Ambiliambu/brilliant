
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FaFileMedicalAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addTask } from '../../apiService';
import TeacherHeader from '../../components/TeacherHeader';
import './AddTask.css'

function AddTask() {
    const navigate=useNavigate()
    const teacher=JSON.parse(localStorage.getItem('teacher'))
  // console.log("ter",teacher);
    const {
        register,
        handleSubmit,
        formState:{errors},} = useForm();
        

    
    
        const onSubmit= async(data)=>{
          const task=data.task[0]
          const endDate=data.endDate

          try{
           
            addTask(teacher,task,endDate).then((response)=>{
              //  console.log("oooo",response);
            })
           }catch(error){
            toast.error(error.response.data.message);

            }
              navigate('/task')
          }

        return (
        <div>
          <TeacherHeader/>
        <Container>
          
            <Row>
            <div className="addtask">
      <div className="addtaskform">
    
       
        <form className="addcourse-form" onSubmit={handleSubmit(onSubmit)}  >
          <span className="material-icons"  style={{fontSize:"35px"}}>Add Task</span>
    
          <div className='mt-2'>       
            <input type='file' 
            className='' 
            id='customFile' 
            name='task'
            {...register('task', { required: {value:true,message:"file is required" }},
            )}
             />
            {/* <label className='custom-file-label' htmlFor="customFile">Choose file</label> */}
           
           

          </div>
   

        <p  style={{ color: "crimson" }}>{errors.task?.message}</p>
        
    
          <input 
          type="Date" 
          placeholder="Target Date"   
          name="endDate"
          {...register('endDate', { required: {value:true,message:"Amount is required" }},
          )}
          />
           <p  style={{ color: "crimson" }}>{errors.endDate?.message}</p>
    
         
    
       
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
