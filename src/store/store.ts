import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slices/auth/auth.slice';
import dialogSlice from './slices/dialog/dialog.slice';
import loadingSlice, {LoadingState} from './slices/loading/loading.slice';
import {AuthState} from './slices/auth/auth.model';
import {DialogState} from './slices/dialog/dialog.model';
import {ProductsState} from './slices/products/products.model';
import productsSlice from './slices/products/products.slice';
import toastSlice from './slices/toast/toast.slice';
import {ToastState} from './slices/toast/toast.model';

export interface State {
  authSlice: AuthState;
  dialogSlice: DialogState;
  loadingSlice: LoadingState;
  productsSlice: ProductsState;
  toastSlice: ToastState;
}

const store = configureStore({
  reducer: {
    authSlice,
    dialogSlice,
    loadingSlice,
    productsSlice,
    toastSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
