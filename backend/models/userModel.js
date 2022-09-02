const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
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



const studentSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add an name']
    },
    email:{
        type:String,
        required:[true,'Please add an email'],
        unique:true
    },
    parentsname:{
        type:String,
        required:[true,'Please add an parent name']
    },
    parentnumber:{
        type:Number,
        required:[true,'Please add parent number']
    },
    phonenumber:{
        type:Number,
        required:[true,'Please add phone number']
    },
    course:{
        type:String,
        required:[true,'Please add course']
    }


},{
    timestamps:true
})
const User= mongoose.model("User",userSchema)
const Student=mongoose.model("Student",studentSchema)
module.exports= {User,Student}





