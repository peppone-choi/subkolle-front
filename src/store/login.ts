import { AuthState } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: AuthState = {
  user: {
    id: -1,
    uuid: '',
    email: '',
    nickname: '',
    profileImage: '',
    role: [],
  },
  accessToken: '',
  refreshToken: '',
};

const LoginSlice = createSlice({
  name: 'loginUser',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    logout(state) {
      state.user = initialState.user;
      state.accessToken = initialState.accessToken;
      state.refreshToken = initialState.refreshToken;
    },
  },
});

export const { login, logout } = LoginSlice.actions;
export default LoginSlice.reducer;
