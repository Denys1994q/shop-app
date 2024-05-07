import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Toast, ToastState} from './toast.model';
import {ToastEnum} from '@/models/toast.enum';

const initialState: ToastState = {
  isOpen: false,
  toast: {message: 'keke', type: ToastEnum.INFO}
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
