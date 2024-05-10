import {useAppSelector} from '@/store/hooks';
import {State} from '@/store/store';

export const selectIsOpen = (state: State) => state.toastSlice.isOpen;
export const selectToast = (state: State) => state.toastSlice.toast;

export const useIsOpenToast = () => useAppSelector(selectIsOpen);
export const useToast = () => useAppSelector(selectToast);
