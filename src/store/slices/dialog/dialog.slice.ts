import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {DialogState} from './dialog.model';
import {ModalContent} from './dialog.model';

const initialState: DialogState = {
  isOpen: false,
  dialogContent: null
};

const DialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    openDialog(state: DialogState, action: PayloadAction<ModalContent>) {
      state.isOpen = true;
      state.dialogContent = action.payload;
    },
    closeDialog(state: DialogState) {
      state.isOpen = false;
    }
  }
});

export const {openDialog, closeDialog} = DialogSlice.actions;

export default DialogSlice.reducer;
