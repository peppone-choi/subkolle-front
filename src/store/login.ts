import { createSlice } from '@reduxjs/toolkit';

const LoginSlice = createSlice({
  name: 'loginUser',
  initialState: {
    user: '',
    accessToken: '',
    refreshToken: '',
  },
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    logout(state) {
      state.user = '';
      state.accessToken = '';
      state.refreshToken = '';
    },
  },
});

export const { login, logout } = LoginSlice.actions;
export default LoginSlice.reducer;
