import {State} from '@/store/store';

export const selectIsOpenDialog = (state: State) => state.dialogSlice.isOpen;
