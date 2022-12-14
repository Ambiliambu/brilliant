import axios from 'axios'

const API_URL= '/api/admins/'



//Admin Login
const adminlogin =async (adminData)=>{
    const response=await axios.post(API_URL+'adminlogin',adminData)
    if(response.data){
        localStorage.setItem('admin',JSON.stringify(response.data))
    }

    return response.data
}

//Logout admin
const adminlogout=()=>{
    localStorage.removeItem('admin')
}






const adminAuthService={

    adminlogout,
    adminlogin
}

export default adminAuthService