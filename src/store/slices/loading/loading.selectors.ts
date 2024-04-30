import {State} from '@/store/store';

export const selectIsLoading = (state: State) => state.loadingSlice.isLoading;
