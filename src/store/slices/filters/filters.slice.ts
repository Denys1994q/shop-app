import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {FiltersState, Filters} from './filters.model';
import {minPrice, maxPrice} from '@/constants/productFilters.constant';
import {RatingEnum} from '@/models/rating.enum';

const initialState: FiltersState = {
  filters: {
    priceRange: [minPrice, maxPrice],
    ratingRange: [RatingEnum.ONE_STAR, RatingEnum.FIVE_STARS],
    categories: [],
    brands: [],
    sort: 0
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
    setPage(state, action) {
      state.currentPage = action.payload;
    }
  }
});

export const {updateFilters, setPage} = FiltersSlice.actions;

export default FiltersSlice.reducer;
