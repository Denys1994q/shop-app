import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Toast, ToastState} from './toast.model';

const initialState: ToastState = {
  isOpen: false,
  toast: null
};

const ToastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    openToast: (state: ToastState, {payload}: PayloadAction<Toast>) => {
      state.isOpen = true;
      state.toast = payload;
    },
    closeToast: (state: ToastState) => {
      state.isOpen = false;
    }
  }
});

export const {openToast, closeToast} = ToastSlice.actions;

export default ToastSlice.reducer;
