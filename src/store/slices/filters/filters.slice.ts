import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialState: any = {
  filters: {
    priceRange: [1, 1200],
    ratingRange: [1, 5],
    categories: [],
    brands: [],
    sort: ''
  },
  currentPage: 1
};

const FiltersSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateFilters(state, action) {
      state.filters = {...state.filters, ...action.payload};
      state.currentPage = 1;
    },
    resetFilters(state) {
      state.filters = {
        priceRange: [1, 1200],
        ratingRange: [1, 5],
        categories: [],
        brands: [],
        sort: ''
      };
    },
    setPage(state, action) {
      state.currentPage = action.payload;
    }
  }
});

export const {updateFilters, setPage, resetFilters} = FiltersSlice.actions;

export default FiltersSlice.reducer;
