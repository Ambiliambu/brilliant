
import { useEffect, useState } from 'react';
import {Button, Container, Modal} from 'react-bootstrap'
import DataTable from "react-data-table-component";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar'
import './Form.scss'


function StudentManagement() {

    const [show,setShow]=useState(false)
  const [student,setStudent]=useState([])
  const [refresh, setrefresh] = useState(false);
//  const [deleteId,setdeleteId]=useState('')

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
      const data=await axios.get('/api/admins/getstudents',config)

      setStudent(data.data)
      console.log("student data",data.data);
    } catch (error) {
      console.error(error)
    }
  })();
}else{
  navigate('/admin')
}
},[refresh,navigate])




const handleClose = () => setShow(false);









    const columnss = [

        {
          name: "Student Name",
          cell: (row) =>row.name
        
        },
        {
          name: "Email",
          selector: (row) => row.email,
          sortable: true,
        },
        {
            name: "Parent's name",
            selector: (row) => row.parentsname,
            sortable: true,
          },
        {
            name: "Parent's Number",
            selector: (row) => row.parentsnumber,
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
     
        
        // {
        //   name: "Delete",
        //   cell: (row) => (
        //     <Button className='btn-danger'
        //       onClick={()=>{
        //         // handleDelete(row._id);
        //       }}
        //     >
        //       Block
        //     </Button>
            
        //   ),

         
        // },
       
      
        
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
             
            </Modal.Footer>
          </Modal>



         

        

          <div className="shadow p-3 mb-5 bg-white rounded ">
            <DataTable
              title="Student Details"
              columns={columnss}
              data={student}
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

export default StudentManagement
