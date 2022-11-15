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
    courseId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course',
        required:true
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
    courseId:{     
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course',     
        required:true

    },
    subjectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Subject',
        required:true
    },
    salary:{
        type:Number,
        default:3000,
        required:true,
    },

    createdate:{
       type:String,
       required:true,
       default:new Date()
    },
    active:{
       type:Boolean,
       required:true,
       default:false
    },
    status:{
        type:Boolean,
        required:true,
        default:true
    }
    

},{
    timestamps:true
})

//schedule
const scheduleSchema=mongoose.Schema({
   
        
    
    courseId:{     
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course',
        required:true
    
    },
    createDate:{
        type:String,
       required:true,
     

    },
    endDate:{
        type:String,
       required:true,
      

    },

    monday:{
        
            startTime:{
                type:String,
                required:true
            },
            endTime:{
                type:String,
                required:true,
            },                

            subjectId:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'Subject',
                    required:true
                
            },
            teacherId:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'Teacher',
                    required:true
                
            }
        
    },
    tuesday:{
        
        startTime:{
            type:String,
            required:true
        },
        endTime:{
            type:String,
            required:true,
        },                

        subjectId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Subject',
                required:true
            
        },
        teacherId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Teacher',
                required:true
            
        }
    
   },
   wednesday:{
        
        startTime:{
            type:String,
            required:true
        },
        endTime:{
            type:String,
            required:true,
        },                

        subjectId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Subject',
                required:true
            
        },
        teacherId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Teacher',
                required:true
            
        }

    },
    thursday:{
            
        startTime:{
            type:String,
            required:true
        },
        endTime:{
            type:String,
            required:true,
        },                

        subjectId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Subject',
                required:true
            
        },
        teacherId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Teacher',
                required:true
            
        }

    },
    friday:{
            
        startTime:{
            type:String,
            required:true
        },
        endTime:{
            type:String,
            required:true,
        },                

        subjectId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Subject',
                required:true
            
        },
        teacherId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Teacher',
                required:true
            
        }

    },
    saturday:{
            
        startTime:{
            type:String,
            required:true,
        },
        endTime:{
            type:String,
            required:true,
            

        },                

        subjectId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Subject',
                required:true
            
        },
        teacherId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Teacher',
                required:true
            
        }

    },

},{
    timestamps:true
})




const Admin=mongoose.model("Admin",adminSchema)
const Course=mongoose.model("Course",courseSchema)
const Teacher=mongoose.model("Teacher",teacherSchema)
const Subject=mongoose.model("Subject",subjectSchema)
const Schedule=mongoose.model('Schedule',scheduleSchema)

module.exports= {Admin,Course,Teacher,Subject,Schedule}