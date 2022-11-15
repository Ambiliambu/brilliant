import axios from 'axios'

const API_URL= '/api/users/'


//Register student
const registerStudent =async (studentData)=>{
    console.log(studentData);
    const response=await axios.post(API_URL,studentData)
    console.log("res",response.data)

    if(response.data){
        console.log("res",response.data)
        localStorage.setItem('student',JSON.stringify(response.data))
    }

    return response.data
}

// Login student
const login =async (studentData)=>{
    const response=await axios.post(API_URL+'login',studentData)
    if(response.data){
        localStorage.setItem('student',JSON.stringify(response.data))
    }

    return response.data
}



//Logoutstudent
const logout=()=>{
    localStorage.removeItem('student')
}






const authService={

    registerStudent,
    logout,
    login,
    
}

export default authService