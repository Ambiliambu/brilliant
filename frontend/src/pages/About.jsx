import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Footer from '../components/Footer'
import Header from '../components/Header'

function About() {
  return (
    <div >
        <Header/>
        <div className='container'>
        
      <h1 className='mt-4 ml-4'>About Us</h1>

     <p className='ml-4'>Here we are providing an proffessional tutors to teach students</p>
     <div className='m-3'>
     <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
          <Card.Body className='bg-primary text-light'>
              <Card.Title><h3>Brilliant Details</h3></Card.Title>
              <Card.Text>
              
              Brilliant was founded to offer life-changing tuition for all, and this  mission makes us excited to get up and come to work everyday.
              We’re proud that our network of tutors   supports pupils from all walks of life.<br/><br/>


                We are providing best calss for students by proffessional tutors.<br/><br/>
                Students have to fill registeration form to be a  real student of the Brilliant <br/><br/>
               We are providing class for some interval of times so the students will not feel exhausted.<br/><br/>
               We giving task for stiudents and lecture notes
               
                
                
              </Card.Text>
            </Card.Body>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
           
          </Card>
        </Col>
        <Col>
          <Card>
          <Card.Body className=' bg-primary text-light'>
              <Card.Title><h3>Schedule Details</h3></Card.Title>
              <Card.Text>
              <h5>Here we provide best class for students</h5>

                ◉ Plusone Science Batch :- Monday -<br/> Friday : 7:30 AM to 8:30 AM, Saturday : 8AM to 1PM<br/>
                ◉ Plustwo Science Batch :  Monday -<br/> Friday : 7:30 AM to 8:30 AM, Saturday : 8AM to 1PM <br/>
                ◉ Crash Course :  Monday - Friday :<br/> 7:30 AM to 8:30 AM, Saturday : 8AM to 1PM<br/>
                ◉ Crash Course :  Monday - Friday :<br/> 7:30 AM to 8:30 AM, Saturday : 8AM to 1PM<br/>
                ◉ Central University Exam Coach :<br/> Monday - Friday : 7:30 AM to 8:30 AM, Saturday : 8AM to 1PM<br/>
               
              </Card.Text>
            </Card.Body>
          
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            
          </Card>
        </Col>
    </Row>
    <Row xs={1} md={2} className="g-4">
        <Col>
          <Card className='mt-4'>
          <Card.Body className='bg-primary text-light'>
              <Card.Title><h3 >Courses </h3></Card.Title>
              <Card.Text className=''>
                <h5>Here we are providing courses are:</h5><br/>

                ◉ Plusone Science Batch<br/>
                ◉ Plustwo Science Batch<br/>
                ◉ Crash Course<br/>
                ◉ Central University Exam Coach<br/>
              </Card.Text>
            </Card.Body>
          
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            
          </Card>
        </Col>
        <Col>
          <Card className='mt-4'>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body className='bg-primary text-light'>
              <Card.Title><h3>Payment Details</h3></Card.Title>
              <Card.Text>
               <h5> For every Course we are taking same amount</h5><br/>

             

                ◉ Plusone Science Batch : ₹2500<br/>
                ◉ Plustwo Science Batch : ₹2500 <br/>
                ◉ Crash Course : ₹2500<br/>
                ◉ Central University Exam Coach :₹2500<br/>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
     </div>

   
      </div>
      <Footer/>
    </div>
  )
}

export default About
