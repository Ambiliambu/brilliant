import axios from 'axios'

const API_URL= '/api/users/'


//Registration of student
const studentEntry =async (studentData)=>{
    const response=await axios.post(API_URL+'student',studentData)
    // console.log("res",response)
    if(response.data){
        localStorage.setItem('student',JSON.stringify(response.data))
    }

    return response.data
}




const studentService={

    studentEntry ,
    
    
}

export default studentService