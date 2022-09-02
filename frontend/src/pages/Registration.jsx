import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import './Form.scss'

function Registration() {

  // const [formData,setFormData]=useState({
  //   name:'',
  //   email:'',
  //   parentsname:'',
  //   parentsnumber:'',
  //   phonenumber:'',


  // })
  // const {name,email,parentsname,parentsnumber,phonenumber}=formData

  // const dispatch=useDispatch()
  // const {user}=useSelector((state)=>state.auth)

  // const onChange=(e)=>{
  //   setFormData((prevState)=>({
  //          ...prevState,
  //          [e.target.name]:e.target.value
  //   }))
  // }

  // const onSubmit=(e)=>{
  //   e.preventDefault()

  
    
    
  // }

  
  return (

    <div>
      <Header/>
    <div>
      <div className='container ' >
        <div >
          <h3 style={{ color: "darkviolet", fontSize: "2rem" }} className="text-center mt-2">Student Registration</h3>
        </div>
        <div className="reg-form-container"  >
         
              <form className="reg-form"
              // onSubmit={onSubmit} 
              >
                <div className="reg-form-content">
                  <div className="row ">
                    <div className='col-12 col-md-5'>
                  <div className="form-group mt-3">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      id="name"
                      name="name"
                      // value={name}
                      placeholder="Email Address"
                    // onChange={onChange}
                    />
                  </div>
                  </div>
                  
                  <div className='col-12 col-md-5'>
                  <div className="form-group mt-3">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className="form-control mt-1"
                      id="email"
                      name="email"
                      // value={email}
                      placeholder="Email Address"
                    // onChange={onChange}
                    />
                  </div>
                  </div>
                  </div>
                  <div className="row ">
                    <div className='col-12 col-md-5'>
                  <div className="form-group mt-3">
                    <label>Parent's Name</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      id='parentname'
                      name='parentname'
                      // value={parentsname}
                      placeholder=" Enter your parentname"
                    // onChange={onChange}

                    />
                  </div>
                  </div>
                  <div  className='col-12 col-md-5'>
                  <div className="form-group mt-3">
                    <label>Parent's Number</label>
                    <input
                      type="number"
                      className="form-control mt-1"
                      id="parentnumber"
                      name="parentnumber"
                      // value={parentsnumber}
                      placeholder="Parent's Number"
                    // onChange={onChange}
                    />
                  </div>
                  </div>
                  </div>
                  <div className='row'>
                    <div className='col-12 col-md-5'>
                  <div className="form-group mt-3">
                    <label>Phone Number</label>
                    <input
                      type="number"
                      className="form-control mt-1"
                      id="phonenumber"
                      name="phonenumber"
                      // value={phonenumber}
                      placeholder="Phone Number"
                    // onChange={onChange}
                    />
                  </div>
                  </div>
                  <div className='col-12 col-md-6'>

                  </div>
                  </div>
          
               

                  <div className='row justify-content-between'>
                   

                    <div className='mt-1 ml-3'>

                      <button type="submit" className="btn btn-primary  ">
                        {/* {user ? 
                        <Link to="/payment">Submit</Link>:
                        <Link to="/login">Submit</Link> } */}
                         <Link to="/payment">Submit</Link>

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
