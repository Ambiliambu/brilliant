
import { useEffect, useState } from 'react';
import {Button, Container, Modal} from 'react-bootstrap'
import DataTable from "react-data-table-component";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar'


function CourseManagement() {

    const [show,setShow]=useState(false)
  const [course,setCourse]=useState([])
  const [refresh, setrefresh] = useState(false);
 const [deleteId,setdeleteId]=useState('')
 const [editId,seteditId]=useState('')

 const navigate=useNavigate()


useEffect(()=>{
  const admin=localStorage.getItem('admin');
  if(admin){
    
  
  (async function(){
    try {
      const config={
        headers:{
          "Content-type": "application/json",

        }
      }
      const data=await axios.get('/api/admins/getcourses',config)
      setCourse(data.data)
    } catch (error) {
      console.error(error)
    }
  })();
}else{
  navigate('/admin')
}
},[refresh])


function handleDelete (Id){
  setShow(true)
  setdeleteId(Id)

   
} 

const handleClose = () => setShow(false);

async function deleteCourse(rowId){
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
    await axios.delete('/api/admins/deletecourse',{
      params:{
        id:Id,},
    config });
    setrefresh(!refresh)
    

  } catch (error) {
    throw new error(error.response.data.message)
  }
}

const addCourse=async()=>{
  try{
    navigate('/addcourse')
  }catch(error){
    throw new error(error.response.data.message)
  }
}




const editCourse=async(courseId)=>{

  try {
    navigate(`/editcourse/${courseId}`)
  } catch (error) {
    throw new error(error.response.data.message)
    
  }
}

    const columnss = [

        {
          name: "Course Name",
          cell: (row) =>row.coursename
        
        },
        {
          name: "Course Amount",
          selector: (row) => row.courseamount,
          sortable: true,
        },
    
        {
          name: "Edit",
          cell: (row) => (
            <Button
              onClick={()=>{
                editCourse(row._id)
              }}
            >
              Edit
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
      <Container className="mt-4">
       

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
              <Button variant="primary" onClick={()=>{
                 deleteCourse({deleteId})
              }} >Delete</Button>
            </Modal.Footer>
          </Modal>



         

        <Button className='addbutton m-2 btn-success' onClick={addCourse}>ADD +</Button>

          <div className="shadow p-3 mb-5 bg-white rounded">
            <DataTable
              title="Course Details"
              columns={columnss}
              data={course}
              pagination
              fixedHeader
              highlightOnHover
            />
          </div>
       
      </Container>
    </div>
  )
}

export default CourseManagement
