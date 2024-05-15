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
import filtersSlice from './slices/filters/filters.slice';
import {FiltersState} from './slices/filters/filters.model';

export interface State {
  authSlice: AuthState;
  dialogSlice: DialogState;
  loadingSlice: LoadingState;
  productsSlice: ProductsState;
  toastSlice: ToastState;
  filtersSlice: FiltersState;
}

const store = configureStore({
  reducer: {
    authSlice,
    dialogSlice,
    loadingSlice,
    productsSlice,
    toastSlice,
    filtersSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
