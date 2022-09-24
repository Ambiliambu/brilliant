const mongoose=require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId 


const adminSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add an name']
    },
    email:{
        type:String,
        required:[true,'Please add an email'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please add an password']
    }

},{
    timestamps:true
})

//course
const courseSchema=mongoose.Schema({
    coursename:{
        type:String,
        required:[true,'Please add an  coursename']
    },
    courseamount:{
        type:Number,
        required:[true,'Please add an amount']
    },
    

},{
    timestamps:true
})




//subject
const subjectSchema=mongoose.Schema({
    subjectname:{
        type:String,
        required:[true,'Please add an   subject name']
    },
    coursename:{
        type:String,
        required:[true,'Please add an course name']
    },
    

},{
    timestamps:true
})





//teacher
const teacherSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add an  coursename']
    },
    email:{
        type:String,
        required:[true,'Please add email'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Please add password"]
    },
    phonenumber:{
        type:Number,
        required:[true,"Please add phone number"]
    },
    course:{     
        type:String,     
        required:true

    },
    subject:{
        type:String,
        required:[true,'Please add subject']
    },
    // salary:{
    //     type:Number,
    //     required:true,
    //     default:null
    // },
    isTeacher:{
        type:Boolean,
        required:true,
        default:true
    }
    

},{
    timestamps:true
})
const Admin=mongoose.model("Admin",adminSchema)
const Course=mongoose.model("Course",courseSchema)
const Teacher=mongoose.model("Teacher",teacherSchema)
const Subject=mongoose.model("Subject",subjectSchema)


module.exports= {Admin,Course,Teacher,Subject}