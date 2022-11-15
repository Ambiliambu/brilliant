import { FaMale, FaSignOutAlt, FaUserTie } from 'react-icons/fa'
import { IoIosPerson } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/user/authSlice'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import '../pages/Form.scss'
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react'
import axios from 'axios'


function Header() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const [student,setStudent]=useState('')  
    const { student } = useSelector((state) => state.auth)
    console.log("tt",student );

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleShow1 = () => setShow1(true);
    const handleClose1 = () => setShow1(false);

    const handleShow2 = () => setShow2(true);
    const handleClose2 = () => setShow2(false);

    const handleShow3 = () => setShow2(true);
    const handleClose3 = () => setShow2(false);


    function handleSubmit() {
        navigate('/teacherlogin')
    }
    function handleSubmit1() {
        navigate('/login')
    }

    function handleSubmit2() {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
    function handleSubmit3() {
        navigate('/login')
    }

    return (
        <div className='sticky-top'>
            <Navbar bg="light" expand="lg" style={{ width: "100%" }}  >
                <Container fluid >
                    <Navbar.Brand >

                        <Link to='/'><h3 style={{ color: "blanchedalmond" }}>Brilliant</h3></Link>

                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="m-auto">
                            {student?.status ? (<>
                                <button className='btn ' ><Link to='/'>Home</Link></button>
                                <button className='btn ' id='' ><Link to='/about'>About Us</Link></button>
                                <button className='btn'>Gallery</button>

                                <button className='btn'>{student.paymentId ? (<Link to='/studentpage'> Student</Link>) : (<Link to='/registration' >Student</Link>)}</button>

                                <button className='btn'>{student.paymentId ? <Link to='/studenttask'>Task</Link> : <Link to=''></Link>}</button>


                            </>) : (<>
                                <button className='btn'><Link to='/'>Home</Link></button>
                                <button className='btn' ><Link to='/about'>About Us</Link></button>
                                <button className='btn'>Gallery</button>
                                {/* <Nav.Link ><Link to='/login'>A Student +</Link></Nav.Link> */}
                                <button className='btn' onClick={handleShow1}>A Student +</button>


                                <Modal show={show1} onHide={handleClose1}>
                                    <Modal.Header >
                                        <Modal.Title>Confirmation</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Are you a steacher? or want to be a student?</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="danger" onClick={handleClose1}>
                                            No
                                        </Button>

                                        <Button variant="primary" onClick={handleSubmit1}>
                                            Yes,Iam
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                                {/* <Nav.Link ><Link to='/teacherlogin'>A Teacher +</Link>  </Nav.Link> */}
                                <button className='btn' onClick={handleShow}>A Teacher +</button>
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



                            {student?.status ? (<>

                                <button className='btn '><span className=''><FaUserTie /></span> {student.name}</button>
                                <button className='btn' onClick={handleShow2}>
                                    <FaSignOutAlt /> Logout
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




                            </>) : (
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




