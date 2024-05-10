import {State} from '@/store/store';
import {createSelector} from '@reduxjs/toolkit';

// export const selectFilters = (state: State) => state.filtersSlice.filters;

export const selectFilters = createSelector(
  (state: State) => state.filtersSlice.filters,
  (filters) => filters
);
