import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Container, Row, Toast } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TeacherHeader from '../components/TeacherHeader'
import './Form.scss'
import {toast} from 'react-toastify'

function Dashboard() {


  const navigate=useNavigate()
  const {teacher}=useSelector((state)=>state.teacherauth)
  const {student}=useSelector((state)=>state.auth)

  

  
  


  const courses=[{
    image: process.env.PUBLIC_URL+"/images/firstimage.jpg",
    title:"11 th science batch",
     
  },
    {
      image: process.env.PUBLIC_URL+"/images/secondimage.jpg",
      title:"12 th science batch",
      
    },
  {
    "image": process.env.PUBLIC_URL+"/images/thirdimage.jpg",
    "title":"Crash course",
  },
  {
    image: process.env.PUBLIC_URL+"/images/fourthimage.jpg",
    title:" Central university exam batch",
  }]

 const handleClick=()=>{
  navigate('/studentpage')
  toast.success("Already Registered")
 }

  return (

    <div>
      {teacher ? <TeacherHeader/> : <Header/>}
       
      <Container>
        <div className='maindiv row ' >
          <div  className="col-12 col-md-6  " >
            <h3 className='text-center sidetitle'>Focus on your goals and<br/> blur everything else.</h3>
      {student?.paymentId ? (<button className='btn-primary leftdiv' onClick={handleClick}>Register Now</button>):(<button className='btn-primary leftdiv'><Link to='/registration'>Register Now</Link></button>
)}
           {/* <button className='btn-primary leftdiv'><Link to='/registration'>Register Now</Link></button> */}
          </div>
          <div  className="col-12 col-md-6">
        <img src="https://st.depositphotos.com/1404973/1331/i/600/depositphotos_13314280-stock-photo-child-learns-at-night.jpg" className='img-fluid' alt="img"/>
          </div>
        </div>
        {/* <Container> */}
        <Row className="justify-content-center mt-2 ">
          <h2 className="font-weight-bold text-primary">Courses</h2>
        </Row>
      
        <div className='row'>

          {courses.map((course,index)=>
             
           <div className='col-12 col-md-3' key={index} >
            <div className="boxshadow" >
              <img src={course.image} className='img-fluid shadow-4  ' alt="course" />
            </div>
            <h3 className="text-center mt-2"><Link to="">{course.title}</Link></h3>
          </div>


          )}
         
    
        </div>

        <div className=' row justify-content-between' >
          <div className='mt-5 col-12 col-md-6'>
        <h3 style={{fontWeight:"500",color:"lightskyblue"}}>About Brilliant </h3>

            <p className="description mt-4  text-secondary">Brilliant was founded to offer life-changing tuition for all,<br/> and this  mission makes us excited to get up and come to<br/> work everyday.
              We’re proud that our network of tutors  <br/> supports pupils from all walks of life.</p>
          </div>
          <div className='mt-4 col-12 col-md-6 boxshadow'  >
            <img src="https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZGVudHxlbnwwfHwwfHw%3D&w=1000&q=80"  
             className='img-fluid shadow-5 ' alt="cental university" />

          </div>
        </div>
        <h3 style={{fontWeight:"500",}}>Review</h3>

        <div className='row'>
          <div className=' col-12 col-md-4'>
        <Card border="primary" >
        <Card.Header>Akash</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div className='col-12 col-md-4'>
      <Card border="primary" >
        <Card.Header>Sarina</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div className='col-12 col-md-4'>
      <Card border="primary" >
        <Card.Header>Anna</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      </div>


      </Container>
      <Footer/>
    </div>
  )
}

export default Dashboard
