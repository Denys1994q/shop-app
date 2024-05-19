import {State} from '@/store/store';

export const selectUser = (state: State) => state.authSlice.user;
