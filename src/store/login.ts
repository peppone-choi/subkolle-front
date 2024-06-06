import { createSlice } from '@reduxjs/toolkit';

const LoginSlice = createSlice({
  name: 'loginUser',
  initialState: {
    user: null,
    accessToken: null,
    refreshToken: null,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    logout(state) {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const { login, logout } = LoginSlice.actions;
export default LoginSlice;
