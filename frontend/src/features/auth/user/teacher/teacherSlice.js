import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import teacherService from '../teacher/teacherService'

//Get teacher from localstorage
const teacher=JSON.parse(localStorage.getItem('teacher'))

const initialState={
    teacher:teacher ? teacher :null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:'',
}

//Registration of teacher
export const teacherEntry= createAsyncThunk('teacherauth/addteacher',async(teacher,thunkAPI)=>{
    try{
        console.log("teacher entyr",teacher);
        return await teacherService.teacherEntry(teacher)
    }catch(error){
        const message=(error.response && error.response.data && error.response.data.message)|| error.message || error.toString()
        
        return thunkAPI.rejectWithValue(message)

    }
})



//Login teacher
export const teacherlogin= createAsyncThunk('teacherauth/loginteacher',async(teacher,thunkAPI)=>{
    try{
        console.log("vvv",teacher);
        return await teacherService.teacherlogin(teacher)
        
    }catch(error){
        const message=(error.response && error.response.data && error.response.data.message)|| error.message || error.toString()
        
        return thunkAPI.rejectWithValue(message)

    }
})


export const teacherlogout=createAsyncThunk('teacherauth/logout',async()=>{
    await teacherService.teacherlogout()
})

export const teacherSlice= createSlice({
    name:'teacherauth',
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
        .addCase(teacherEntry.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(teacherEntry.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.teacher=action.payload
        })
        .addCase(teacherEntry.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.teacher=null

        })
        .addCase(teacherlogin.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(teacherlogin.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.teacher=action.payload
        })
        .addCase(teacherlogin.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.teacher=null


        })
        .addCase(teacherlogout.fulfilled,(state)=>{
            state.teacher=null
    })
        
    
    }
})

export const {reset}=teacherSlice.actions
export default teacherSlice.reducer