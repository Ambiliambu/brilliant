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
   const array=["plusone","plustwo","crashcourse","centraluniversity"]
    const onLogout=()=>{
        dispatch(adminlogout())
        dispatch(reset())
        navigate('/admin')
    }

    function handleNavigate(){
      navigate('/plusone',{
      state:{
        name:"name"
      }}
      )
      
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
              throw new error(error.response.data.message)
          }
      })();
  },[])


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
                        
                    <button className='btn' >Student Management</button >
                    <button className='btn'  ><Link to='/teacher'>Teacher Management</Link></button >
                    <button className='btn'  ><Link to='/course'>Course Management</Link></button >
                    <button className='btn'  ><Link to='/subject'>Subject Management</Link></button >
                       
                   <button className='btn'><NavDropdown title="Shedule Management" id="collasible-nav-dropdown">
                    {course.map((obj,index)=>
                    <div key={index} >
                     <NavDropdown.Item ><Link to='/plusone' state={{value:obj.coursename}}>{obj.coursename}</Link> </NavDropdown.Item>

                     </div>
                    
                      
                    )} 

              {/* <NavDropdown.Item ><Link to='/plusone'>Plus One</Link> </NavDropdown.Item>
              <NavDropdown.Item >Plus Two </NavDropdown.Item>
              <NavDropdown.Item >Crash Course </NavDropdown.Item>
              <NavDropdown.Item >Central University Exam couching </NavDropdown.Item> */}
              
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





