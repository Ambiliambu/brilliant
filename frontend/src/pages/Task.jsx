import React, { useState } from 'react'
import axios from 'axios'
import TeacherHeader from '../components/TeacherHeader'
import './Form.scss'
import moment from 'moment'
import { Button, Modal } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getTask } from '../apiService'


function Task() {
 const navigate=useNavigate()
  const onClick=()=>{
    navigate('/addtask')
  }

  const [task,setTask]=useState([])
  const [teacher,setTeacher]=useState('')
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  // const teacher=JSON.parse(localStorage.getItem('teacher'))

  useEffect(()=>{
    const teacher=JSON.parse(localStorage.getItem('teacher'))
    setTeacher(teacher)
    if(teacher){
    getTask(teacher._id).then((response)=>{
      console.log("oooyyy",response);
      setTask(response.data)
    })
  }else{
    navigate('/')
  }
  },[])


  return (
    <div>
      <TeacherHeader/>

    <div className='container mt-5 '>
      <div className='mr-5'>
      <Button onClick={onClick}>Add task +</Button>
      </div>
      <div>
          <h5 className='mt-3'>Name:<b>{teacher.name}</b></h5>
        

        </div>
        <h4 className='mt-3'>Tasks</h4>
        Submit in Google Classroom
     
      {task.map((obj)=>
        <div className='clsdiv'>
        
        <div className='row'>
       <div className='col-4   d-flex align-items-center justify-content-center' >
        <button className='btn' onClick={() => setShow(true)} >Task: {obj.task}</button>
        <Modal
        show={show}
        // fullscreen='lg-down'
        onHide={() => setShow(false)}
        dialogClassName="modal-90w "
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header >
           
          <Modal.Title id="example-custom-modal-styling-title">
            Task
          </Modal.Title>
          
        </Modal.Header>
      
        <Modal.Body>
          <img src={obj.task} alt="img"  className='img-fluid'></img>
          {/* <h4>{obj.course} </h4> */}
        </Modal.Body>
        <>
        <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </>
      </Modal>
       </div>
        <div className='col-8 mt-2'>
        <h6>Start Date: {obj.startDate}</h6>
        <h6>End Date:{obj.endDate}</h6>
        </div>
       
        </div>
      </div>
      )}
     
    </div>
 
    </div>
  )
}

export default Task
