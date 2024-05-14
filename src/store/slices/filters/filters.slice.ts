import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {FiltersState, Filters} from './filters.model';

const initialState: FiltersState = {
  filters: {
    priceRange: [1, 1000],
    ratingRange: [1, 5]
  }
};

const FiltersSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateFilters(state: FiltersState, action: PayloadAction<Filters>) {
      state.filters = {...state.filters, ...action.payload};
    }
  }
});

export const {updateFilters} = FiltersSlice.actions;

export default FiltersSlice.reducer;
