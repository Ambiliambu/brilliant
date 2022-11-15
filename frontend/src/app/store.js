import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/user/authSlice'
import adminAuthReducer from '../features/auth/admin/adminAuthSlice'
import teacherAuthReducer from '../features/auth/teacher/teacherSlice'

export const store = configureStore({
  reducer: {
      auth:authReducer,
      adminauth:adminAuthReducer,
      teacherauth:teacherAuthReducer
  },
});
