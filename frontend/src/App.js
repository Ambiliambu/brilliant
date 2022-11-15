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
import CourseManagement from './pages/CourseManagement'
import AddCourse from './pages/AddCourse/AddCourse'
import EditCourse from './pages/EditCourse/EditCourse'
import TeacherManagement from './pages/TeacherManagement'
import AddTeacher from './pages/AddTeacher'
import Teacherpage from './pages/Teacherpage'
import TeacherLogin from './pages/TeacherLogin'
import StudentPage from './pages/StudentPage'
import Confirmation from './components/Confirmation'
import ScheduleScreen from './pages/ScheduleScreen'
import AddSchedule from './pages/AddSchedule'
import SubjectManagement from './pages/SubjectManagement'
import AddSubject from './pages/AddSubject/AddSubject'
import Plusone from './components/Schedule.js/Plusone'
import StudentManagement from './pages/StudentManagement'
import About from './pages/About'
import Task from './pages/Task'
import AddTask from './pages/AddTask/AddTask'
import StudentTask from './pages/StudentTask'
import PaymentManagement from './pages/PaymentManagement'
import Chat from './pages/Chat/Chat'

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

      <Route path='/about' element={<About/>}/>
     


      <Route path='/course' element={<CourseManagement/>}/>
      <Route path='/addcourse' element={<AddCourse/>}/>
      <Route path='/editcourse/:courseId' element={<EditCourse/>}/>

      <Route path='/teacher' element={<TeacherManagement/>}/>
      <Route path='/addteacher'  element={<AddTeacher/>}/>
      <Route path='/teacherpage' element={<Teacherpage/>}/>
      <Route path='/teacherlogin' element={<TeacherLogin/>}/>
      <Route path='/studentpage' element={<StudentPage/>}/>
      {/* <Route path='/plusone' element={<ScheduleScreen/>}/> */}
      {/* <Route path='/plusone' element={<Plusone/>}/>
       */}

       {/* //task  */}
       <Route path='/task' element={<Task/>}/>
       <Route path='/addtask' element={<AddTask/>}/>
      <Route path='/studenttask' element={<StudentTask/>}/>

       
      <Route path='/schedule/:courseId' element={<Plusone/>}/>
      <Route path='/addschedule/:courseId' element={<AddSchedule/>}/>

      
      <Route path='/student' element={<StudentManagement/>}/>
      <Route path='/paymentmanagement' element={<PaymentManagement/>}/>

      <Route path='/subject' element={<SubjectManagement/>}/>
      <Route path='/addsubject' element={<AddSubject/>}/>

      <Route path='/chat/:courseId' element={<Chat/>}/>


    </Routes>
   
    </div>
    </Router>
      <ToastContainer/>
    </>
    
  );
}

export default App;
