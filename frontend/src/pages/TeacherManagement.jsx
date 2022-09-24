
import { useEffect, useState } from 'react';
import {Button, Container, Modal} from 'react-bootstrap'
import DataTable from "react-data-table-component";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar'
import './Form.scss'
import Navbar from '../components/Sidebar';


function TeacherManagement() {

    const [show,setShow]=useState(false)
  const [teacher,setTeacher]=useState([])
  const [refresh, setrefresh] = useState(false);
 const [deleteId,setdeleteId]=useState('')
 const [editId,seteditId]=useState('')

 const navigate=useNavigate()


useEffect(()=>{
  const admin=localStorage.getItem('admin');
  // console.log("admin",admin);
  if(admin){
    
  
  (async function(){
    try {
      const config={
        headers:{
          "Content-type": "application/json",

        }
      }
      const data=await axios.get('/api/admins/getteachers',config)

      setTeacher(data.data)
      console.log("teacher data",data.data);
    } catch (error) {
      console.error(error)
    }
  })();
}else{
  navigate('/admin')
}
},[refresh,navigate])


function handleDelete (Id){
  setShow(true)
  setdeleteId(Id)

   
} 

const handleClose = () => setShow(false);

async function deleteTeacher(rowId){
  handleClose();
  console.log("kj",rowId.deleteId);
  const Id=rowId.deleteId;
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      }
    }
    console.log("jhj");
    await axios.delete('/api/admins/deleteteacher',{
      params:{
        id:Id,},
    config });
    setrefresh(!refresh)

  } catch (error) {
    throw new error(error.response.data.message)
  }
}

const addTeacher=async()=>{
  try{
    navigate('/addteacher')
  }catch(error){
    throw new error(error.response.data.message)
  }
}




const editTeacher=async(teacherId)=>{

  try {
    navigate(`/editteacher/${teacherId}`)
  } catch (error) {
    throw new error(error.response.data.message)
    
  }
}


    const columnss = [

        {
          name: "Teacher Name",
          cell: (row) =>row.name
        
        },
        {
          name: "Email",
          selector: (row) => row.email,
          sortable: true,
        },
        {
          name: "Phone Number",
          selector: (row) => row.phonenumber,
          sortable: true,
        },
        {
          name: "Course",
          selector: (row) => row.course,
          sortable: true,
        },
        {
          name: "Subject",
          selector: (row) => row.subject,
          sortable: true,
        },
        {
          name: "Delete",
          cell: (row) => (
            <Button className='btn-danger'
              onClick={()=>{
                // handleDelete(row._id);
              }}
            >
              Block
            </Button>
            
          ),

         
        },
       
        {
          name: "Delete",
          cell: (row) => (
            <Button className='btn-danger'
              onClick={()=>{
                handleDelete(row._id);
              }}
            >
              Delete
            </Button>
            
          ),

         
        },
        
        
    ]
  return (
    <div>
      
   
      <AdminSidebar/>
     
      <Container className="mt-4 ">
       
      <div className=''>

          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header>
              <Modal.Title>Start Process</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Do you want to delete data?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" 
              onClick={()=>{
                 deleteTeacher({deleteId})
              }} 
              >Delete</Button>
            </Modal.Footer>
          </Modal>



         

        <Button className='addbutton m-2 btn-success' 
        onClick={addTeacher}
        >ADD +</Button>

          <div className="shadow p-3 mb-5 bg-white rounded ">
            <DataTable
              title="Teacher Details"
              columns={columnss}
              data={teacher}
              pagination
              fixedHeader
              highlightOnHover

            />
          </div>
          </div>
      </Container>
  
    </div>
  )
}

export default TeacherManagement
