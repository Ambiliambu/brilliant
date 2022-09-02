import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './Form.scss'

function Dashboard() {
  return (
    <div>
       <Header/>
      {/* <Container> */}
        <div>
          <img src="https://qph.cf2.quoracdn.net/main-qimg-00d8b611d67c41c09700af47a20be028-lq" style={{ width: "100%", height: "500px" }} alt="img" />

        </div>
        <Container>
        <Row className="justify-content-center mt-2 ">
          <h2 className="font-weight-bold text-primary">Courses</h2>
        </Row>
        <div className='row'>
          <div className='col-12 col-md-3'>
            <div className="boxshadow" >
              <img src="https://static8.depositphotos.com/1037473/938/i/450/depositphotos_9389022-stock-photo-students-in-class-color-toned.jpg" className='img-fluid shadow-4  ' alt="11 science" />
            </div>
            <h3 className="text-center mt-2"><Link to="/registration">11 th science batch</Link></h3>
          </div>
          <div className='col-12 col-md-3'>
            <div className="boxshadow" >
              <img src="https://st2.depositphotos.com/1046535/8261/i/600/depositphotos_82619112-stock-photo-school-class-teacher-motivating-students.jpg" className='img-fluid shadow-4  ' alt="12 science" />
            </div>
            <h3 className="text-center mt-2"><Link to="/registration">12 th Science batch</Link></h3>
          </div>
          <div className='col-12 col-md-3'>
            <div className="boxshadow" >
              <img src="https://st.depositphotos.com/1518767/1395/i/600/depositphotos_13959346-stock-photo-side-view-of-four-students.jpg" className='img-fluid shadow-4   ' alt="crash course" />
            </div>
            <h3 className="text-center mt-2">Crash course</h3>
          </div>
          <div className='col-12 col-md-3'>
            <div className="boxshadow" >
              <img src="https://st.depositphotos.com/2309453/3131/i/600/depositphotos_31317779-stock-photo-university-students-studying-together.jpg" className='img-fluid shadow-4  ' alt="cental university" />
            </div>
            <h3 className="text-center mt-2 "> Central university</h3>
          </div>
        </div>
        <div className=' row justify-content-between' >
          <div className='mt-5 col-12 col-md-6'>
        <h3 style={{color:"violet",fontWeight:"3rem"}}>About Brilliant</h3>

            <p className="text-height-3 mt-5 h5 text-secondary">Brilliant was founded to offer life-changing tuition for all, and this  mission makes us excited to get up and come to work everyday.
              We’re proud that our network of tutors supports pupils from all walks of life. Lesson are tailored to each individual and for the hectic schedule.</p>
          </div>
          <div className='mt-4 col-12 col-md-6 boxshadow'  >
            <img src="https://images.unsplash.com/photo-1629872430082-93d8912beccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZGVudHxlbnwwfHwwfHw%3D&w=1000&q=80"  
             className='img-fluid shadow-5 ' alt="cental university" />

          </div>
        </div>
        <h3 style={{color:"blueviolet"}}>Review</h3>

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
