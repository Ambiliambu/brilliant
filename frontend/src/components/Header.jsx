import {FaSignOutAlt} from 'react-icons/fa'
import {Link,useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {logout,reset} from '../features/auth/authSlice'
import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import  '../pages/Form.scss'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'


function Header() {

    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {user}=useSelector((state)=>state.auth)
   

    
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleShow1 = () => setShow1(true);
    const handleClose1 = () => setShow1(false);

    const handleShow2 = () => setShow2(true);
    const handleClose2 = () => setShow2(false);

 
function handleSubmit(){
    navigate('/teacherlogin')
}
function handleSubmit1(){
    navigate('/login')
}

function handleSubmit2(){
    dispatch(logout())
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
                        {user ? (<>
                    <button className='btn' ><Link to='/'>Home</Link></button>
                    <button className='btn'><Link to='/about'>About Us</Link></button>
                    <button className='btn'>Gallery</button>
                    
                    <button className='btn'>{user.isStudent ? <Link to='/studentpage'>Student</Link> : <Link to='/registration'>Student</Link>}</button>


                        </>) :(<>
                    <button  className='btn'><Link to='/'>Home</Link></button>
                    <button className='btn' ><Link to='/about'>About Us</Link></button>
                    <button className='btn'>Gallery</button>
                    {/* <Nav.Link ><Link to='/login'>A Student +</Link></Nav.Link> */}
                    <button  className='btn' onClick={handleShow1}>A Student +</button>


                    <Modal show={show1} onHide={handleClose1}>
                            <Modal.Header >
                                <Modal.Title>Confirmation</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Are you a Student? or want to be a Student? </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={handleClose1}>
                                No
                                </Button>

                                <Button variant="primary" onClick={handleSubmit1}>
                                Yes, I am
                                </Button>
                            </Modal.Footer>
                            </Modal>
                    {/* <Nav.Link ><Link to='/teacherlogin'>A Teacher +</Link>  </Nav.Link> */}
                    <button  className='btn' onClick={handleShow}>A Teacher +</button>
                    <Modal show={show} onHide={handleClose}>
                            <Modal.Header >
                                <Modal.Title>Confirmation</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Are you a Teacher?</Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={handleClose}>
                                No
                                </Button>

                                <Button variant="primary" onClick={handleSubmit}>
                                yes, I am
                                </Button>
                            </Modal.Footer>
                            </Modal>
                        </>)}
                   
                    </Nav>

                    <Nav >

                     
                          
         {user ?(<>
         <button className='btn' onClick={handleShow2}>
             <FaSignOutAlt/> Logout        
         </button>
         <Modal show={show2} onHide={handleClose2}>
                            <Modal.Header >
                                <Modal.Title>Confirmation</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Do You want to logout?</Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={handleClose2}>
                                No
                                </Button>

                                <Button variant="primary" onClick={handleSubmit2}>
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

export default Header




