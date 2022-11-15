
import { useEffect, useState } from 'react';
import {Button, Container, Modal} from 'react-bootstrap'
import DataTable from "react-data-table-component";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar'
import './Form.scss'


function StudentManagement() {

const [show,setShow]=useState(false)
const [student,setStudent]=useState([])
const [refresh, setrefresh] = useState(false);
const [search,setSearch]=useState('')
const [filterData, setFilterData] = useState([]);
const [data,setData]=useState('')
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
      const data=await axios.get(`/api/admins/getstudents`,config)
      // console.log("ffdata",data);
      setStudent(data.data)

    
    } catch (error) {
      console.error(error)
    }
  })();
}else{ 
 
  navigate('/admin')  
}
},[navigate,refresh,data])



async function handleBlockAndUnblock(Id,status){
  console.log("Id",Id,status);
  try {
    const {data}=await axios.patch(`/api/admins/blockandunblockstudent/${Id}`,{status:status})
    setData(data)
  } catch (error) {
    console.log(error);
  }

  
}

const handleClose = () => setShow(false);



useEffect(() => {

  const result = student.filter((obj) => {
  
      console.log("kk",obj.courseId?.coursename);
      return obj.courseId?.coursename.toLowerCase().includes(search.toLowerCase());
  
      
  });
  console.log("iiiresult",result);
  setFilterData(result);
}, [student,search]);


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
          selector: (row) => row.courseId?.coursename,
          sortable: true,
        }, 
        {
          name: "Action",
          cell: (row) => (
            row.status ? ( <Button className='btn-danger'
            onClick={()=>{
              handleBlockAndUnblock(row._id,false);
            }}
          >
            Block
          </Button>):(<Button className='btn-success'
          onClick={()=>{
            handleBlockAndUnblock(row._id,true);
          }}
        >

          Unblock
        </Button>)
           
          )  
                 
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
             
            </Modal.Footer>
          </Modal>

          <div className="shadow p-3 mb-5 bg-white rounded ">
            <DataTable
             
              title="Student Details " 
              columns={columnss}
              data={filterData}
              pagination
              fixedHeader
              highlightOnHover
              subHeader
              subHeaderComponent={
                <input
                  type="text"
                  placeholder="Serch here..."
                  className="w-25 form-control"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                   
                />
              }

            />
          </div>
          </div>
      </Container>
  
    </div>
  )
}

export default StudentManagement
