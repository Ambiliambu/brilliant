import {FaSignOutAlt} from 'react-icons/fa'
import {Link,useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {teacherlogout,reset} from '../features/auth/user/teacher/teacherSlice'
import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import  '../pages/Form.scss'
import Modal from 'react-bootstrap/Modal';
import {  useState } from 'react'


function TeacherHeader() {

    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {teacher}=useSelector((state)=>state.teacherauth)
   

    
  
    const [show, setShow] = useState(false);



    

   

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

 


function handleSubmit(){
    dispatch(teacherlogout())
    dispatch(reset())
    navigate('/')
}

    
  return (
    <div className='sticky-top'>
    <Navbar bg="light"  expand="lg" style={{width:"100%"}}  >
            <Container fluid > 
                <Navbar.Brand >
                    
                <Link to='/'><h3 style={{color:"blanchedalmond"}}>Brilliant</h3></Link>
                    
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="navbarScroll" />
                
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="m-auto">
                    
                    <button className='btn' ><Link to='/'>Home</Link></button>
                    <button className='btn'><Link to='/about'>About Us</Link></button>
                    <button className='btn'>Gallery </button>
                   {teacher.isTeacher===true ? ( <><button className='btn'><Link to='/teacherpage'>Teacher</Link></button> 
                    <button className='btn'><Link to='/task'>Task</Link></button></>) :(<></>)} 
                    

                   
                    </Nav>

                    <Nav >

                     
                          
         {teacher ?(<>
         <button className='btn' onClick={handleShow}>
             <FaSignOutAlt/> Logout        
         </button>
         <Modal show={show} onHide={handleClose}>
                            <Modal.Header >
                                <Modal.Title>Confirmation</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Do You want to logout?</Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={handleClose}>
                                No
                                </Button>

                                <Button variant="primary" onClick={handleSubmit}>
                                Ok
                                </Button>
                            </Modal.Footer>
                            </Modal>
        

   
     
         </> ) :(
            <div>
         </div>
    )}
       
        

                    </Nav>
                    <></>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
  )
}

export default TeacherHeader




