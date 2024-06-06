import { combineReducers, configureStore } from '@reduxjs/toolkit';
import LoginSlice from './login';
import { persistReducer } from 'redux-persist';
import createWebStorage from 'redux-persist/es/storage/createWebStorage';
const reducers = combineReducers({
  login: LoginSlice,
});

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window === 'undefined' ? createNoopStorage() : createWebStorage('local');

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
