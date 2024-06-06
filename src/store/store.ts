import { combineReducers, configureStore } from '@reduxjs/toolkit';
import LoginSlice from './login';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
const combinedReducer = combineReducers({
  loginUser: LoginSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login'],
};

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
