import {FaSignInAlt,FaSignOutAlt} from 'react-icons/fa'
import {Link,useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {adminlogout,reset} from '../features/auth/adminAuthSlice'
import {Button, Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
// import  '../pages/Form.scss'

function Header() {

    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {admin}=useSelector((state)=>state.admin)
    


    const onLogout=()=>{
        dispatch(adminlogout())
        dispatch(reset())
        navigate('/admin')
    }

  return (
    <div className=''>
    <Navbar bg="light"  expand="lg" style={{width:"100%"}}  >
            <Container fluid style={{backgroundColor:"lightblue"}}   > 
                <Navbar.Brand >
                    
                <Link to='/'><h3 style={{color:"blue",borderRadius:"5rem"
              }}>Brilliant</h3></Link>
                    
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="navbarScroll" />
                
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="m-auto">
                        
                    <Nav.Link >Student Management</Nav.Link>
                    <Nav.Link >Course Management</Nav.Link>
                       
                   
                    </Nav>

                    <Nav >

                        
                          
    
         
         <Button className='btn' onClick={onLogout}>
             <FaSignOutAlt/>Logout
         </Button>
         
        
       
   
     
  
        

                    </Nav>
                    <></>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
  )
}

export default Header





