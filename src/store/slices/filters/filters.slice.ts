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
    sort: ''
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
