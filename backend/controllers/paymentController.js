const Razorpay=require('razorpay')
const asynchandler=require('express-async-handler')
const shortid=require('shortid')
const {Transaction}=require('../models/userModel')
const crypto = require("crypto");




  const createOrder=asynchandler(async(req,res)=>{
    const  razorpay = new Razorpay({
      key_id:process.env.RAZORPAY_KEY ,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });



   const options={
    amount:parseInt(req.body.amount*100),
    currency:"INR",
    receipt:shortid.generate(),
   
   }
try{
   const order=await razorpay.orders.create(options);
   if(!order){
    return res.status(500).send("Some Error Occured")
   }
   res.status(200).json({
    //...order
    id:order.id,
    currency:order.currency,
    amount:order.amount/100
   })
}catch(error){
    console.log(error,"errror");
}
  })


 const verifyPayment=asynchandler(async(req,res)=>{
 
  const { 
        amount,
        studentId,
        courseId,
        userId,
        razorpayPaymentId ,
        razorpayOrderId,
        razorpaysignature,
}=req.body;

// console.log("eee",req.body);

  let hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
    hmac.update(razorpayOrderId + "|" + razorpayPaymentId);
    hmac = hmac.digest("hex");
// console.log("zggggz",hmac);
if(hmac == razorpaysignature){
  // console.log("Successfull");
  
  const newTransaction=Transaction({
    payId:razorpayPaymentId ,
    date:new Date(),
    amount:amount,
    studentId:studentId,
    courseId:courseId,
    userId:userId

  })

  // console.log("oo",newTransaction);

  await newTransaction.save();

  res.status(200).json({
    transId:newTransaction._id,
    message:" Payment Successfull",
    status:true,
    studentId:studentId,
    courseId:courseId,
    amount:amount,
    userId:userId

  })
 
}else{
  res.status(400).json({
    message:"Payment failiure",
    status:false
  })
}


})




  module.exports={
    createOrder,
    verifyPayment
  }