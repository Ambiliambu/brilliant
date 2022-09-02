import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './pages/Login'
import Register from './pages/Register'
// import Header from './components/Header'
// import Footer from './components/Footer'
import Registration from './pages/Registration'
import Payment from './pages/Payment'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
function App() {
  return (
  
    <>
     <Router>
    <div className='' >
      {/* <Header/> */}
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/admin' element={<AdminLogin/>}/>
      <Route path='/admindashboard' element={<AdminDashboard/>} />
    </Routes>
   
    </div>
    </Router>
      <ToastContainer/>
    </>
    
  );
}

export default App;
