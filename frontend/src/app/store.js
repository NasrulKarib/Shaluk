import { configureStore } from '@reduxjs/toolkit';
import userinfoReducer from '../features/userQuery/userinfoSlice';

export const store = configureStore({
  reducer: {
    userinfo: userinfoReducer,
  },
});
