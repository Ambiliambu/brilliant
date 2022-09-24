import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import studentService from '../student/studentService'

//Get student from localstorage
const student=JSON.parse(localStorage.getItem('student'))

const initialState={
    student:student ? student :null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:'',
}

//Registration of student
export const studentEntry= createAsyncThunk('studentauth/registration',async(student,thunkAPI)=>{
    try{
        // console.log(student);
        return await studentService.studentEntry(student)
    }catch(error){
        const message=(error.response && error.response.data && error.response.data.message)|| error.message || error.toString()
        
        return thunkAPI.rejectWithValue(message)

    }
})


export const studentSlice= createSlice({
    name:'studentauth',
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
        .addCase(studentEntry.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(studentEntry.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.student=action.payload
        })
        .addCase(studentEntry.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.student=null

        })

        
    }
})

export const {reset}=studentSlice.actions
export default studentSlice.reducer