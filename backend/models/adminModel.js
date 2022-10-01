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

//schedule
const scheduleSchema=mongoose.Schema([{
   
        mday:{
            type:String,
            required:[true,'Please add an day']
        },
        mstarttime:{
            type:String,
            required:[true,"Please add start time"]
        },
        mendtime:{
            type:String,
            required:[true,"Please add end time"]
        },
        // course:{     
        //     type:String,     
        //     required:true
    
        // },
        msubject:{
            type:String,
            required:[true,'Please add subject']
        },
    
        mteacher:{
            type:String,
            required:[true,'please add teacher']
        }
       
    },{
        tuday:{
            type:String,
            required:[true,'Please add an day']
        },
        tustarttime:{
            type:String,
            required:[true,"Please add start time"]
        },
        tuendtime:{
            type:String,
            required:[true,"Please add end time"]
        },
        // course:{     
        //     type:String,     
        //     required:true
    
        // },
        tusubject:{
            type:String,
            required:[true,'Please add subject']
        },
    
        tuteacher:{
            type:String,
            required:[true,'please add teacher']
        }
    },{
        wday:{
            type:String,
            required:[true,'Please add an day']
        },
        wstarttime:{
            type:String,
            required:[true,"Please add start time"]
        },
        wendtime:{
            type:String,
            required:[true,"Please add end time"]
        },
        // course:{     
        //     type:String,     
        //     required:true
    
        // },
        wsubject:{
            type:String,
            required:[true,'Please add subject']
        },
    
        wteacher:{
            type:String,
            required:[true,'please add teacher']
        }
    },{
        thday:{
            type:String,
            required:[true,'Please add an day']
        },
        thstarttime:{
            type:String,
            required:[true,"Please add start time"]
        },
        thendtime:{
            type:String,
            required:[true,"Please add end time"]
        },
        // course:{     
        //     type:String,     
        //     required:true
    
        // },
        thsubject:{
            type:String,
            required:[true,'Please add subject']
        },
    
        thteacher:{
            type:String,
            required:[true,'please add teacher']
        }
    },{
        fday:{
            type:String,
            required:[true,'Please add an day']
        },
        fstarttime:{
            type:String,
            required:[true,"Please add start time"]
        },
        fendtime:{
            type:String,
            required:[true,"Please add end time"]
        },
        // course:{     
        //     type:String,     
        //     required:true
    
        // },
        fsubject:{
            type:String,
            required:[true,'Please add subject']
        },
    
        fteacher:{
            type:String,
            required:[true,'please add teacher']
        }
    },{
        sday:{
            type:String,
            required:[true,'Please add an day']
        },
        sstarttime:{
            type:String,
            required:[true,"Please add start time"]
        },
        sendtime:{
            type:String,
            required:[true,"Please add end time"]
        },
        // course:{     
        //     type:String,     
        //     required:true
    
        // },
        ssubject:{
            type:String,
            required:[true,'Please add subject']
        },
    
        steacher:{
            type:String,
            required:[true,'please add teacher']
        }
    },
    {
    course:{     
            type:String,     
            required:true
    
        }
    }
    

],{
    

    timestamps:true
})




const Admin=mongoose.model("Admin",adminSchema)
const Course=mongoose.model("Course",courseSchema)
const Teacher=mongoose.model("Teacher",teacherSchema)
const Subject=mongoose.model("Subject",subjectSchema)
const Schedule=mongoose.model('Schedule',scheduleSchema)

module.exports= {Admin,Course,Teacher,Subject,Schedule}