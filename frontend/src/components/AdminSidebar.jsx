import {FaSignOutAlt} from 'react-icons/fa'
import {Link,useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {adminlogout,reset} from '../features/auth/admin/adminAuthSlice'
import {Button, Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
// import  '../pages/Form.scss'

function AdminSidebar() {

    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {admin}=useSelector((state)=>state.adminauth)
    
    const [course,setCourse]=useState([]);

    const onLogout=()=>{
        dispatch(adminlogout())
        dispatch(reset())
        navigate('/admin')
    }

    

    useEffect(()=>{
      (async function(){
          try {
              const config={
                headers:{
                  "Content-type": "application/json",
        
                }
              }
              const {data}=await axios.get('/api/admins/getcourses',config)
       
              setCourse(data)


  
          }catch(error){
             
            console.log(error)
          }
      })();
  },[])

  const hadleSchedule=async(courseId)=>{
    console.log("ppp",courseId);
    try {
      navigate(`/schedule/${courseId}`)
    } catch (error) {
  throw new error(error.response.data.message)
      
    }
  }

  const hadleStudent=async(courseId)=>{
    console.log("ppp",courseId);
    try {
      navigate(`/student/${courseId}`)
    } catch (error) {
  throw new error(error.response.data.message)
      
    }
  }

  return (
    <div className=''>
    <Navbar bg="light"  expand="lg" style={{width:"100%"}}  >
            <Container fluid    > 
                <Navbar.Brand >
                    
                <h3 style={{color:"white",borderRadius:"5rem"
              }}>Brilliant</h3>
                    
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="navbarScroll" />
                
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="m-auto">
                        
                  

                    <button className='btn ' ><Link to='/student'>Student Management</Link></button >

                    <button className='btn'  ><Link to='/teacher'>Teacher Management</Link></button >
                    <button className='btn'  ><Link to='/course'>Course Management</Link></button >
                    <button className='btn'  ><Link to='/subject'>Subject Management</Link></button >
                    <button className='btn'  ><Link to='/paymentmanagement'>Payment Management</Link></button >

                       
                   <button className='btn'><NavDropdown title="Shedule Management" id="collasible-nav-dropdown">
                    

                     {course.map((obj,index)=>
                    <div key={index} >
                     <NavDropdown.Item onClick={()=>hadleSchedule(obj._id)}>{obj.coursename} </NavDropdown.Item>

                     </div>
                    
                      
                    )} 


           {/* {course.map((obj,index)=>
                    <div key={index} >
                     <NavDropdown.Item ><Link to='/plusone' onClick={onClick} value={data} ></Link> </NavDropdown.Item>

                     </div>
                    
                      
                    )}  */}
           
              
            </NavDropdown>
            </button> 


                    </Nav>

                    <Nav >

                        
                          
    
         
         <button className='btn' onClick={onLogout}>
             <FaSignOutAlt/>Logout
         </button>
         
        
       
   
     
  
        


        

                    </Nav>
                    <></>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
  )
}


export default AdminSidebar



;

