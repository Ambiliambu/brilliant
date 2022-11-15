const mongoose=require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId 





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
    password:{
        type:String,
        required:[true,'Please add an password']
    }, 
    phonenumber:{
        type:Number,
        required:[true,'Please add phone number']
    },
    parentsname:{
        type:String,
        
    },
    parentsnumber:{
        type:Number
    },
    courseId:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"Course"
    },
    paymentId:{
        type:mongoose.Schema.Types.ObjectId,
    },
 
    status:{
        type:Boolean,
        required:true,
        default:true
        
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
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student",
        required:true
    },
    courseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
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
        teacherId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Teacher",
            required:true
        },
        courseId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course",
            required:true,
        },
        subjectId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Subject",
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
        task:[{
            type:String,
            required:true
        }],
        fileName:[{
            type:String,
            required:true,
        }],
        name:{
            type:String,
            required:true
        }
        
    
    },{
        timestamps:true
    })


const Student=mongoose.model("Student",studentSchema)
const Transaction =mongoose.model("Transaction",transactionSchema)
const Task=mongoose.model('Task',taskSchema)

module.exports= {Student,Transaction,Task}



 

