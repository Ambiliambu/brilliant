const mongoose=require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId 

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
    }, 
    isStudent:{
        type:Boolean,
        required:true,
        default:false
        
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
    parentsnumber:{
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
    },
    userId:{
        type:ObjectId,
        ref :  "User",
    },
    status:{
        type:Boolean,
        required:true,
        default:false
        
    }

    

},{
    timestamps:true
})


const transactionSchema=mongoose.Schema({
    payId:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    studentId:{
        type:String,
        required:true
    },
    courseId:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        reqiured:true
    },
    status:{
        type:Boolean,
        required:true,
        default:false
    }

},{
        timestamps:true
    })

    const taskSchema=mongoose.Schema({
        teacher:{
            type:String,
            required:true
        },
        course:{
            type:String,
            required:true,
        },
        subject:{
            type:String,
            required:true
        }, 
        startDate:{
            type:String,
            required:true
        },
        endDate:{
            type:String,
            required:true
        },
        task:{
            type:String,
            required:true
        }
        
    
    },{
        timestamps:true
    })


const User= mongoose.model("User",userSchema)
const Student=mongoose.model("Student",studentSchema)
const Transaction =mongoose.model("Transaction",transactionSchema)
const Task=mongoose.model('Task',taskSchema)

module.exports= {User,Student,Transaction,Task}



 

