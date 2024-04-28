import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slices/auth/auth.slice';
import dialogSlice from './slices/dialog/dialog.slice';
import loadingSlice, {LoadingState} from './slices/loading/loading.slice';
import {AuthState} from './slices/auth/auth.model';
import {DialogState} from './slices/dialog/dialog.model';

export interface State {
  authSlice: AuthState;
  dialogSlice: DialogState;
  loadingSlice: LoadingState;
}

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
