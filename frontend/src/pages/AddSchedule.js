import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Container, Dropdown, Modal } from 'react-bootstrap'
import DataTable from 'react-data-table-component'
import { useLocation } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import moment from 'moment'

function AddSchedule() {

  const location=useLocation();
  const  course=location.state.course;

  useEffect(()=>{

    // console.log("ii",location.state.course);
    (async function(){
      try {
          const config={
            headers:{
              "Content-type": "application/json",
    
            }
          }
          // const {data}=await axios.get('/api/admins/getteachers',config)
          // console.log("courseadd",data);
        //  setCourse(data)

        

        } catch (error) {
          console.error(error)
        }
      })();
  })






  return (
    <div>
       <div>
      <AdminSidebar/>
      <div className='container ' >
        <div >
          <h3 style={{ color: "darkviolet", fontSize: "2rem" }} className="text-center mt-2">Add Schedule</h3>
        </div>
        <div className="reg-form-container"  >
         
              <form className="reg-form"
            //    onSubmit={handleSubmit(onSubmit)} 
              >
                <div className="reg-form-content">
                <div className="row ">
                    <div className='col-12 col-md-6'>
                      <label>Course : <b>{course}</b></label>
                 
                    </div>
                    </div>
                  <div className="row ">
                    <div className='col-12 col-md-3'>
                  <div className="form-group mt-3">
                    <label className='mt-4 ml-4' >Monday  </label>
                  
                  

                  </div>
                  </div>
                  
                  <div className='col-12 col-md-4'>
                  <div className="form-group mt-3">
                    <label>Subject</label>
                    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Choose Subject
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

                  </div>
                  </div>
                  <div className='col-12 col-md-4'>
                  <div className="form-group mt-3">
                    <label  >Teacher</label>
                    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Choose Teacher
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

                  </div>
                  </div>
                 
                 
                  </div>






                {/* 2 */}
                  <div className="row ">
                    <div className='col-12 col-md-3'>
                  <div className="form-group mt-3">
                    <label className='mt-4 ml-4' >Tuesday</label>
                  
                  

                  </div>
                  </div>
                  
                  <div className='col-12 col-md-4'>
                  <div className="form-group mt-3">
                    <label></label>
                    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Choose Subject
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

                  </div>
                  </div>
                  <div className='col-12 col-md-4'>
                  <div className="form-group mt-3">
                    <label></label>
                    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Choose Teacher
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

                  </div>
                  </div>
                 
                  </div>




{/* 3 */}

<div className="row ">
                    <div className='col-12 col-md-3'>
                  <div className="form-group mt-3">
                    <label className='mt-4 ml-4' >Tuesday</label>
                  
                  

                  </div>
                  </div>
                  
                  <div className='col-12 col-md-4'>
                  <div className="form-group mt-3">
                    <label></label>
                    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Choose Subject
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

                  </div>
                  </div>
                  <div className='col-12 col-md-4'>
                  <div className="form-group mt-3">
                    <label></label>
                    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Choose Teacher
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

                  </div>
                  </div>
                 
                  </div>



                  {/* 4
                   */}
                   <div className="row ">
                    <div className='col-12 col-md-3'>
                  <div className="form-group mt-3">
                    <label className='mt-4 ml-4' >Tuesday</label>
                  
                  

                  </div>
                  </div>
                  
                  <div className='col-12 col-md-4'>
                  <div className="form-group mt-3">
                    <label></label>
                    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Choose Subject
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

                  </div>
                  </div>
                  <div className='col-12 col-md-4'>
                  <div className="form-group mt-3">
                    <label></label>
                    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Choose Teacher
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

                  </div>
                  </div>
                 
                  </div>






                  {/* 5 */}

                  <div className="row ">
                    <div className='col-12 col-md-3'>
                  <div className="form-group mt-3">
                    <label className='mt-4 ml-4' >Tuesday</label>
                  
                  

                  </div>
                  </div>
                  
                  <div className='col-12 col-md-4'>
                  <div className="form-group mt-3">
                    <label></label>
                    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Choose Subject
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

                  </div>
                  </div>
                  <div className='col-12 col-md-4'>
                  <div className="form-group mt-3">
                    <label></label>
                    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Choose Teacher
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

                  </div>
                  </div>
                 
                  </div>





                  {/* 6 */}


                  <div className="row ">
                    <div className='col-12 col-md-3'>
                  <div className="form-group mt-3">
                    <label className='mt-4 ml-4' >Tuesday</label>
                  
                  

                  </div>
                  </div>
                  
                  <div className='col-12 col-md-4'>
                  <div className="form-group mt-3">
                    <label></label>
                    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Choose Subject
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

                  </div>
                  </div>
                  <div className='col-12 col-md-4'>
                  <div className="form-group mt-3">
                    <label></label>
                    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Choose Teacher
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

                  </div>
                  </div>
                 
                  </div>


























                 
                 




        
               

                  <div className='row justify-content-between'>
                  <div className='mt-1 ml-5'>

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

export default AddSchedule
