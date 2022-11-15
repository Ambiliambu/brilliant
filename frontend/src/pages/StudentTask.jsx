import React, { useEffect, useState } from 'react'
import { getTasks } from '../apiService';
import Header from '../components/Header'
import ModalImage from "react-modal-image";
import './Form.scss'
import axios from 'axios';
function StudentTask() {


    const [task,setTask]=useState([])
    const [check,setCheck]=useState()
    
const student=JSON.parse(localStorage.getItem('student'))

    useEffect(()=>{


    (async function(){
      try {
          const config={
            headers:{
              "Content-type": "application/json",
    
            }
          }
        

          const {data}=await axios.get(`/api/users/studenttask/${student.courseId._id}`,config)
          console.log("ff",data);
          setTask(data)

         }catch(error){
           console.error(error);
         }
         })();
      
    },[])
  
    
const handleShow=(Id)=>{
   setCheck(Id)
}


    return (
      <div>
        <Header/>
        
      <div className='container mt-5 '>
      <h4 className='mt-3'>Tasks</h4>
      <div className='row'>
        <div className='col-4'>
        <h5>Name: <b>{student.name}</b></h5>

        </div>
        <div className='col-4'>
        <h5>Course: <b>{student.coursename}</b></h5>

       </div>
        </div>
       

        {task.map((obj,index)=>
          <div className='clsdiv' key={index} >
          
          <div className='row'>
         <div className='col-4   d-flex align-items-center justify-content-center' >
        <button className='btn' onClick={()=>handleShow(obj._id)} >Task: {obj.name}</button>


{obj._id===check ? (
  <>
  {obj.task.map((tasks,i)=>

<ModalImage

  small={tasks}
  medium={tasks}
  large={tasks}
  

  alt={obj.name}
  className="img"

  /> 
)}
  </>
):(<></>)}
      


         </div>
         
          <div className='col-4 mt-2'>
            
          <h6>Start Date:{obj.startDate}</h6>
          <h6>End Date: {obj.endDate}</h6>
          </div>
         
          <div className='col-4 mt-2'>   
          <h6>Subject:{obj?.subjectId?.subjectname}</h6>
          </div>
          </div>
        </div>
        )}
       
      </div>
   
      </div>
    )
}

export default StudentTask
