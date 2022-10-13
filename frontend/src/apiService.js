import { axiosClient } from "./apiClient";
import moment from 'moment'

export async function addTask(teacherData,task,endDate){
    // console.log("datada service",teacherData,task,endDate);
    const teacher=await axiosClient.get(`/api/admins/editteacher/${teacherData._id}`)
    // console.log("trea",teacher.data);
    const taskdata={
        teacher:teacher.data._id,
        course:teacher.data.course,
        subject:teacher.data.subject,
        startDate:moment(new Date()).format('DD-MMM-YYYY'),
        endDate:moment(endDate).format('DD-MMM-YYYY'),
    

    }
   
    console.log("tadsrfad",task);
    const formData=new FormData();
    formData.append('task',task);


    return await axiosClient.post('/api/users/addtask',formData,
    {params:
         taskdata
    
    }
     );
}
export async function getTask(teacherId){
    console.log("trecherIf",teacherId);
     return await axiosClient.get(`/api/users/gettask/${teacherId}`)
}
export async function getTasks(course){
    console.log("trecherIf",course);
     return await axiosClient.get(`/api/users/gettasks/${course}`)
}