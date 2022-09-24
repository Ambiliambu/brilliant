import axios from 'axios'

const API_URL= '/api/admins/'



//teacher register
const teacherEntry =async (teacherData)=>{
    const response=await axios.post(API_URL+'addteacher',teacherData)
    console.log("response",(response.data));
    if(response.data){
        localStorage.setItem('teacher',JSON.stringify(response.data))
    }

    return response.data
}


const API_URL2='/api/users/'
//Login teacher
const teacherlogin =async (teacherData)=>{
    const response=await axios.post(API_URL2+'loginteacher',teacherData)
    console.log("response",response);
    if(response.data){
        localStorage.setItem('teacher',JSON.stringify(response.data))
    }


    return response.data
}


//Logout teacher
const teacherlogout=()=>{
    localStorage.removeItem('teacher')
}


const teacherService={

    teacherEntry ,
    teacherlogin,
    teacherlogout
    
}

export default teacherService