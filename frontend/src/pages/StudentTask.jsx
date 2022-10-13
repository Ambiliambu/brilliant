import React, { useEffect, useState } from 'react'
import { getTasks } from '../apiService';
import Header from '../components/Header'
import ModalImage from "react-modal-image";
import './Form.scss'
function StudentTask() {
    const [task,setTask]=useState([])
    const [student,setStudent]=useState('')
    
//  const student=JSON.parse(localStorage.getItem('student'))
//   console.log("stu",student);
    useEffect(()=>{
 const student=JSON.parse(localStorage.getItem('student'))
    setStudent(student)
      getTasks(student.course).then((response)=>{
        console.log("oooyyy",response);
        setTask(response.data)
      })
    },[])
  
  
    return (
      <div>
        <Header/>
        
      <div className='container mt-5 '>
      <div>
          <h5>Name: <b>{student.name}</b></h5>
        </div>
        <h4 className='mt-3'>Tasks</h4>

        {task.map((obj,index)=>
          <div className='clsdiv' key={index} >
          
          <div className='row'>
         <div className='col-4   d-flex align-items-center justify-content-center' >
        <button className='btn'  >Task: {obj.task}</button>


<ModalImage
  small={obj.task}
  large={obj.task}
  alt="imggg"
  className="img"
/>;        
         </div>
         
          <div className='col-4 mt-2'>
            
          <h6>Start Date:{obj.startDate}</h6>
          <h6>End Date: {obj.endDate}</h6>
          </div>
         
          <div className='col-4 mt-2'>   
          <h6>Subject:{obj.subject}</h6>
          {/* <h6>End Date: {obj.endDate}</h6> */}
          </div>
          </div>
        </div>
        )}
       
      </div>
   
      </div>
    )
}

export default StudentTask
