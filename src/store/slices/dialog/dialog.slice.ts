import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ModalType} from '@/models/dialog.enum';
import {DialogState} from './dialog.model';

const initialState: DialogState = {
  dialogType: null
};

const DialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    openModal(state: DialogState, action: PayloadAction<ModalType | null>) {
      state.dialogType = action.payload;
    }
  }
});

export const {openModal} = DialogSlice.actions;

export default DialogSlice.reducer;
