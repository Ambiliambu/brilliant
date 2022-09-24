import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import adminAuthReducer from '../features/auth/admin/adminAuthSlice'
import studentAuthReducer from '../features/auth/user/student/studentSlice'
import teacherAuthReducer from '../features/auth/user/teacher/teacherSlice'

export const store = configureStore({
  reducer: {
      auth:authReducer,
      adminauth:adminAuthReducer,
      studentauth:studentAuthReducer,
      teacherauth:teacherAuthReducer
  },
});
