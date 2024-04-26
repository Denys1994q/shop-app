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
    openModal(state: DialogState, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
    setModalContent(state: DialogState, action: PayloadAction<ModalContent>) {
      state.dialogContent = action.payload;
    }
  }
});

export const {openModal, setModalContent} = DialogSlice.actions;

export default DialogSlice.reducer;
