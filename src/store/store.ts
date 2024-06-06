import { combineReducers, configureStore } from '@reduxjs/toolkit';
import LoginSlice from './login';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
const reducers = combineReducers({
  reducer: {
    login: LoginSlice.reducer,
  },
});

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
