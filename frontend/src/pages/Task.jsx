import React, { Fragment, useState } from 'react'
import axios from 'axios'
import TeacherHeader from '../components/TeacherHeader'
import './Form.scss'
import moment from 'moment'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getTask } from '../apiService'
import { IconName, MdDelete } from "react-icons/md";


function Task() {
 const navigate=useNavigate()
  const onClick=()=>{
    navigate('/addtask')
  }

  const [task,setTask]=useState([])
  const [show, setShow] = useState(false);
  const [check,setCheck]=useState()
  const [refresh, setrefresh] = useState(false);

  // const [teacherData,setTeacherData]=useState('')

  const handleClose = () => setShow(false);

  // const teacher=JSON.parse(localStorage.getItem('teacher'))
  const teacher=JSON.parse(localStorage.getItem('teacher'))
  // setTeacher(teacher)
const location=useLocation()
  useEffect(()=>{

    if(teacher){
      console.log("uuuuu",teacher);
      (async function(){
        try {
            const config={
              headers:{
                "Content-type": "application/json",
      
              }
            }
          

            const {data}=await axios.get(`/api/users/gettasks/${teacher._id}`,config)
            console.log("ff",data);
            setTask(data)

           }catch(error){
             console.error(error);
           }
           })();

   
  }else{
    navigate('/')
  }
  },[navigate,location,refresh])



const handleShow=(Id)=>{
  console.log("id",Id); 
  setCheck(Id)
  setShow(true)

}

const handleDelete=(Id)=>{
  try {
    const config={
      headers:{
        "Content-type": "application/json",

      }
    }
     axios.delete(`/api/users/deletetask/${Id}`,config)
     setrefresh(!refresh)

  }catch(error){
     console.log(error);
  }

}
  return (
    <div>
      <TeacherHeader/>

    <div className='container mt-5 '>
      <div className='mr-5'>
      <Button onClick={onClick}>Add task +</Button>
      </div>
      <div className='row'>
        
        <div  className='col-md-4 ' >
        <h5 className='mt-3'>Teacher:<b>{teacher.name}</b></h5>

        </div>
        <div className='col-md-4'>
        <h5 className='mt-3'>Course:<b>{teacher?.courseId?.coursename}</b></h5>

        </div>
        <div className='col-md-4'>
        <h5 className='mt-3'>Subject:<b>{teacher?.subjectId?.subjectname}</b></h5>

        </div>
      

      

      </div>
 
          

       
        <h4 className='mt-3'>Tasks</h4>
        Submit in Google Classroom
     
      {task.map((obj,index)=>
      <div key={index}>






        <div className='clsdiv' >
        
        <div className='row'>
       <div className='col-4   d-flex align-items-center justify-content-center' >
        <button className='btn' onClick={()=>{handleShow(obj._id)}} >{obj.name}</button>
        {obj._id===check ? (

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
      
        <Modal.Body className="show-grid"  >
        <Container>
        <Row>
        
            

             {obj.task.map((tasks,i)=>
                  
                    <div key={i}>
                <img src={tasks} alt="img"  className='img-fluid'></img>

                </div>
                  )}
            

            
          
           
           
          </Row>
        </Container>
      </Modal.Body>


        <>
        <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </>
      </Modal>
        ):(<></>)}

       </div>
        <div className='col-6 mt-2'>
        <h6>Start Date: {obj.startDate}</h6>
        <h6>End Date:{obj.endDate}</h6>
        
        </div>
        <div className='mt-3' >
          <button className='btn' onClick={()=>{handleDelete(obj._id)}} >
            <MdDelete/>
            </button>
        </div>
      
        </div>
      
      </div>
      </div>

      )}
    

    </div>
    
    </div>
  )
}

export default Task
