import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slices/auth/auth.slice';

const store = configureStore({
  reducer: {
    authSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
