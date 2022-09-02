import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import adminAuthService from './adminAuthService'

//Get admin from localstorage
const admin=JSON.parse(localStorage.getItem('admin'))

const initialState={
    admin:admin ? admin :null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:'',
}



//Login Admin
export const adminlogin= createAsyncThunk('auth/adminlogin',async(admin,thunkAPI)=>{
    try{
        return await adminAuthService.adminlogin(admin)
    }catch(error){
        const message=(error.response && error.response.data && error.response.data.message)|| error.message || error.toString()
        
        return thunkAPI.rejectWithValue(message)

    }
}) 

export const adminlogout=createAsyncThunk('auth/adminlogout',async()=>{
    await adminAuthService.adminlogout()
})




export const adminAuthSlice= createSlice({
    name:'admin',
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
        .addCase(adminlogin.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(adminlogin.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.admin=action.payload
        })
        .addCase(adminlogin.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.admin=null


        })
        .addCase(adminlogout.fulfilled,(state)=>{
            state.admin=null
    })
    }
})

export const {reset}=adminAuthSlice.actions
export default adminAuthSlice.reducer