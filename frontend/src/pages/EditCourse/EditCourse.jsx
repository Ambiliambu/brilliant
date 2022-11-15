import React, { useEffect, useState } from 'react'
import "./EditCourse.css";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, Container, Row } from 'react-bootstrap'
import axios from 'axios';
import AdminSidebar from '../../components/AdminSidebar';

function EditCourse() {

    const navigate = useNavigate();


        const [amount, setAmount] = useState('');
        const [name, setName] = useState('');
        const courseId = useParams();

        useEffect(() => {
            try {
              (async function () {
                const { data } = await axios.get(`/api/admins/getcourse/${courseId.courseId}`);

                setName(data.coursename);
                setAmount(data.courseamount);
              })();
            } catch (error) {
              throw new error(error.response.data.message);
            }
          }, []);
        


const handleSubmit=async(e)=>{
    e.preventDefault();

    try{
        const config ={
            header:{
                "Content-type":'application/json',
            }
        };
        console.log("ghghgj");
       await  axios.patch(`/api/admins/editcourse/${courseId.courseId}`,
       {
        name,amount
       },config);
       navigate('/course')
    }catch(error){
      console.error(error)
    }
}

  return (
    <div>
      <AdminSidebar/>
     <Container>
      
        <Row>
        <div className="courseedit">
  <div className="editcourseform">
  
    <form className="editcourse-form"  onSubmit={handleSubmit} >
      <span className="material-icon" style={{fontSize:"40px"}}>Edit User</span>

      <input 
      minLength={3}
      maxLength={100}
      type="text" 
      placeholder=" Course Name"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      name="coursename"
      required
     
      />
    
     

      <input 
      type="number" 
      minLength={5}
      maxLength={6}
      placeholder="Course amount" 
      value={amount}
      onChange={(e)=>setAmount(e.target.value)}
      name="courseamount"
      required
     
      />
      
      <Button type="submit">Edit</Button>
    </form>  
    <Button type="submit " className='mt-2 btn-danger'><Link to='/course'> Cancel</Link></Button>
  </div>
</div>
        </Row>
    </Container>

    
    </div>
  )
}

export default EditCourse

