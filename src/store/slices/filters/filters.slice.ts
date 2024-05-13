import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  filters: {
    priceRange: [1, 1000],
    ratingRange: [1, 5],
    categories: [],
    brands: [],
    sort: ''
  }
};

const FiltersSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateFilters(state, action) {
      state.filters = {...state.filters, ...action.payload};
    }
  }
});

export const {updateFilters} = FiltersSlice.actions;

export default FiltersSlice.reducer;
