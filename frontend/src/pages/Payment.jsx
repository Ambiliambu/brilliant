import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import './Form.scss'
import {toast} from 'react-toastify'
import {   useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

//razorpay script loading
function loadScript(src){
    return new Promise(resolve=>{

    const script=document.createElement('script')
    script.src=src
    script.onload=()=>{
        resolve(true)
    }
    script.onerror=()=>{
       resolve(false)
    }
    document.body.appendChild(script)

})
 }
 const __DEV__ =document.domain==='localhost'


export default function Payment() {

  const navigate=useNavigate()
  const [student,setStudent]=useState('')
  const [course,setCourse]=useState('')
  const [user,setUser]=useState('')



useEffect(()=>{
//currenet student
const student=JSON.parse(localStorage.getItem('student'))
setStudent(student)

//current user
const  user=JSON.parse(localStorage.getItem('user'))
setUser(user)
console.log("ooo",student);
console.log("user",user);


 if(student){
   (async function(){
        try {
            const config={
              headers:{
                "Content-type": "application/json",
      
              }
            }
            const {data}=await axios.get('/api/admins/getcourses',config)
            console.log("hhh");
             data.forEach((course)=>{

                if(course.coursename===student.course){
                    setCourse(course)
                }
             })

          

          } catch (error) {
            console.error(error)
          }
        })();
    }else{
        navigate('/login')
    }


},[])


        
// useEffect(()=>{



     //display razorpay popup  
    async function displayRazorpay(){
        const result=await loadScript('https://checkout.razorpay.com/v1/checkout.js')
        if(!result){
            alert('Razorpay SDK failed to load or Are you online?')
            return
        }

        const config={
            headers:{
              "Content-type": "application/json",
    
            }
          }

        const {data}=await axios.post('/api/users/razorpay',{
         amount:course.courseamount 
        },
        config)

        // console.log(data,"data")
         
        const options = {
            key: __DEV__? process.env.RAZORPAY_KEY :'PRODUCTION_KEY', 
            currency:data.currency,
            amount:data.amount,
            name: "Brilliant",
            description: "Transaction",
            order_id:data.id,
            image: process.env.PUBLIC_URL+"/images/logo.jpg",
            handler:async function (response) {
                // alert(' response.razorpay_signature')
              const result=await axios.post('/api/users/verifypayment',{
                    amount:data.amount,
                    studentId:student._id,
                    courseId:course._id,
                    userId:user._id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaysignature: response.razorpay_signature,
                    status:response.status
                },config)

                console.log("jjj",result.data.userId);
                

               const userId=result.data.userId
               const studentId=result.data.studentId

                if(result.data.status){
                   
                    try {
                        const config={
                          headers:{
                            "Content-type": "application/json",
                  
                          }
                        }
                            const details=await axios.patch('/api/users/acceptstudent',{userId},{config})
                        // console.log("details",details.data);
                             
                      

                       const data=await axios.patch('/api/users/approvestudent',{studentId},{config})
                    // console.log("fff",data.data);   
 

                        // Promise.any([details,data]);
                   if(details.data.isStudent){
                        toast.success("Payment success")
                        navigate('/studentpage')
                    }else{
                        toast.error("Student Aleready registered")
                        
                    }
                      
                    
                  
               
            }catch(error){
                console.error(error);

            }
                   
                }

			},
            prefill: {
                name: student.name,                   
                email: student.email,
                contact: student.parentsnumber
            },
            
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open()

     }
  
    // },[])

    
    return (
        <div>
            <Header/>
        <div className='container '>
            <div>
                <h2 style={{ color: "darkcyan" }} className="text-center mt-2">Payment</h2>
            </div>
            <div className="col-md-12 ">
                <div className=" border p-3">

                    <div className="header h4">Details : </div>
                  
                    <hr />
                    <div className='row lower'>
                        <h5 className='details col text-left'>Name of the Student : </h5>
                        <h5 className="detailvalue col text-right ">{student.name}</h5>
                    </div>
                    <div className='row lower mt-2'>
                        <h5 className='details  col text-left'>Course Choosen : </h5>
                        <h5 className="detailvalue col text-right ">{student.course}</h5>
                        </div>
                    <div className='row lower mt-2'>
                        <h5 className='details  col text-left'>Email Address : </h5>
                        <h5 className="detailvalue col text-right ">{student.email}</h5>
                        </div>
                    <div className='row lower mt-2'>
                        <h5 className='details  col text-left'>Phone Number :</h5>
                        <h5 className="detailvalue col text-right ">{student.phonenumber}</h5>
                        </div>
                    <div className='row lower mt-2'>
                        <h5 className='details  col text-left'>Parent's name : </h5>
                        <h5 className="detailvalue col text-right ">{student.parentsname}</h5>
                        </div>
                    <div className='row lower mt-2'>
                        <h5 className='details  col text-left'>Parent's Phone Number :</h5>
                        <h5 className="detailvalue col text-right ">{student.parentsnumber}</h5>


                    </div>
                   
                    <div className="row lower">
                        <h6 className="col text-left total mt-3 ">Total Paymet</h6>
                        <h6 className="col text-right total mt-3"> ₹ {course.courseamount}</h6>
                    </div>

                    <div className="row lower">
                        {/* <div className="col text-left"><a href="#"><u>Add promo code</u></a></div> */}
                    </div>
                    <button type='submit' className="btn btn-primary mt-3" onClick={displayRazorpay}>Check Out</button>
                </div>
            </div>
           

            <div>
            </div>
        </div>
        </div>
    )
}
