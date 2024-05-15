import {State} from '@/store/store';

export const selectFilters = (state: State) => state.filtersSlice.filters;
