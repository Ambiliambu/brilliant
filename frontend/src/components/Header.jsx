import {FaSignInAlt,FaSignOutAlt} from 'react-icons/fa'
import {Link,useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {logout,reset} from '../features/auth/authSlice'
import {Button, Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import  '../pages/Form.scss'

function Header() {

    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {user}=useSelector((state)=>state.auth)
    


    const onLogout=()=>{
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

  return (
    <div className=''>
    <Navbar bg="light"  expand="lg" style={{width:"100%"}}  >
            <Container fluid > 
                <Navbar.Brand >
                    
                <Link to='/'><h3 style={{color:"blanchedalmond"}}>Brilliant</h3></Link>
                    
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="navbarScroll" />
                
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="m-auto">
                        {user ? (<>
                    <Nav.Link >Home</Nav.Link>
                    <Nav.Link >About Us</Nav.Link>
                    <Nav.Link >Gallery</Nav.Link>
                        </>) :(<>
                    <Nav.Link ><Link to='/'>Home</Link></Nav.Link>
                    <Nav.Link ><Link to='/'>About Us</Link></Nav.Link>
                    <Nav.Link ><Link to='/'>Gallery</Link></Nav.Link>
                    <Nav.Link ><Link to='/login'>Be a student +</Link></Nav.Link>
                    <Nav.Link ><Link to='/login'>Be a Teacher +</Link></Nav.Link>
                        </>)}
                   
                    </Nav>

                    <Nav >

                        
                          
         {user ?(<>
         
         <Button className='btn' onClick={onLogout}>
             <FaSignOutAlt/>Logout
         </Button>
         
         {/* <div>
            <div>
                Home
            </div>
            <div>
                About Us 
            </div>
            <div>
                Gallery
            </div>
           
         </div> */}

   
     
         </> ) :(
            <div>
     
         <Link to='/login'>
             <FaSignInAlt /> Login
         </Link>
         
         {/* <div>
            <div>
                Home
            </div>
            <div>
                About Us 
            </div>
            <div>
                Gallery
            </div>
            <div>
                Be a Student +
            </div>
            <div>
                Be a Teacher +
            </div>
           
         </div> */}
         
      
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






//     <header className='header'>
//     <div className="log">
//         <Link to='/'>Brilliant</Link>
//     </div>
//     <ul>
//         {user ?(
//          <li>
//          <button className='btn' onClick={onLogout}>
//              <FaSignOutAlt/>Logout
//          </button>
         
//      </li>
   
     
//         ) :(<>
//          <li>
//          <Link to='/login'>
//              <FaSignInAlt/>Login
//          </Link>
//      </li>
//      <li>
//          <Link to='/register'>
//              <FaSignInAlt/>Register
//          </Link>
//      </li>
     
    
//         </>)}
       
        
//     </ul>
// </header>