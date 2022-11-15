import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Container, Modal } from 'react-bootstrap'
import DataTable from 'react-data-table-component'
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar'

function PaymentManagement() {


 const navigate=useNavigate();
 const [refresh,setRefresh]=useState()
const [data,setData]=useState();


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

            const data=await axios.get('/api/users/coursestudent',config)
      
            setData(data.data)
            console.log("teacher data",data.data);
          } catch (error) {
            console.error(error)
          }
        })();

      }else{
        navigate('/admin')
      }
      },[refresh,navigate])




    const da=[{
        name:"ll",
        email:"jjjj"
    },
{
    name:"iii",
    email:"uuuuu"
}]

    
    const columnss = [

        {
          name: "Course Name",
          cell: (row) =>row._id.courseId
        
        },
        {
          name: "Student count",
          selector: (row) => row.count,
          sortable: true,
        },
        
       
        
        {
          name: "Action",
          cell: (row) => (
            row.status ? ( <Button className='btn-danger'
            // onClick={()=>{
            //   handleBlockAndUnblock(row._id,false);
            // }}
          >
            Request
          </Button>):(<Button className='btn-success'
        //   onClick={()=>{
        //     handleBlockAndUnblock(row._id,true);
        //   }}
        >

          Requested
        </Button>)
           
          )  
                 
        },
       
        
        {
          name: "Action",
          cell: (row) => (
            <Button className='btn-danger'
            //   onClick={()=>{
            //     handleDelete(row._id);
            //   }}
            >
              Approve
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
            // show={show}
            // onHide={handleClose}
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
              <Button variant="secondary" 
            //   onClick={handleClose}
              >
                Close
              </Button>
              <Button variant="primary" 
            //   onClick={()=>{
            //      deleteTeacher({deleteId})
            //   }} 
              >Approve</Button>
            </Modal.Footer>
          </Modal>



         

     

          <div className="shadow p-3 mb-5 bg-white rounded ">
            <DataTable
              title="Payment Details"
              columns={columnss}
              data={data}
              pagination
              fixedHeader
              highlightOnHover
            //   subHeader
            //   subHeaderComponent={
            //     <input
            //       type="text"
            //       placeholder="Serch here..."
            //       className="w-25 form-control"
            //       value={search}
            //       onChange={(e) => {
            //         setSearch(e.target.value);
            //       }}
                   
            //     />
            //   }
            />
          </div>
          </div>
      </Container>
  
    </div>
  )
}

export default PaymentManagement
