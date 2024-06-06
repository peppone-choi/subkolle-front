import { configureStore } from '@reduxjs/toolkit';
import LoginSlice from './login';
const store = configureStore({
  reducer: {
    login: LoginSlice.reducer,
  },
});

export default store;
