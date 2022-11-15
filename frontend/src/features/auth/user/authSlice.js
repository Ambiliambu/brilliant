import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import authService from '../user/authService'

//Get student from localstorage
const student=JSON.parse(localStorage.getItem('student'))

const initialState={
    student:student ? student :null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:'',
}

//Register student
export const registerStudent= createAsyncThunk('auth/register',async(student,thunkAPI)=>{
    try{
        console.log("gas",student);
        return await authService.registerStudent(student)
    }catch(error){
        console.log("yyy",error);
        const message=(error.response && error.response.data && error.response.data.message)|| error.message || error.toString()
        
        return thunkAPI.rejectWithValue(message)

    }
})

//Login student
export const login= createAsyncThunk('auth/login',async(student,thunkAPI)=>{
    try{
        return await authService.login(student)
    }catch(error){
        const message=(error.response && error.response.data && error.response.data.message)|| error.message || error.toString()
        
        return thunkAPI.rejectWithValue(message)

    }
})


export const logout=createAsyncThunk('auth/logout',async()=>{
    await authService.logout()
})



export const authSlice= createSlice({
    name:'auth',
    initialState,
    reducers:{
        reset:(state)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=false
            state.message=''
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(registerStudent.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(registerStudent.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.student=action.payload
        })
        .addCase(registerStudent.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.student=null

        })

        .addCase(login.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.student=action.payload
        })
        .addCase(login.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.student=null


        })



        .addCase(logout.fulfilled,(state)=>{
            state.student=null
    })
    }
})

export const {reset}=authSlice.actions
export default authSlice.reducer