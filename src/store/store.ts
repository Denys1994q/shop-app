import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slices/auth/auth.slice';
import dialogSlice from './slices/dialog/dialog.slice';
import loadingSlice from './slices/loading/loading.slice';

const store = configureStore({
  reducer: {
    authSlice,
    dialogSlice,
    loadingSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
