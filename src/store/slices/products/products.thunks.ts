import {getAllProductsUrl} from '@/constants/api';
import axiosInstance from '@/services/axiosInstance';
import {handleApiError} from '@/services/handleApiError';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Product} from './products.model';
<<<<<<< HEAD

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async (filters: any = {}, {rejectWithValue}): Promise<Product[] | any> => {
    try {
      const {minPrice, maxPrice, minRating, maxRating, categories, brands, sort} = filters;
      let params: any = {};
      if (minPrice !== undefined) params.minPrice = minPrice;
      if (maxPrice !== undefined) params.maxPrice = maxPrice;
      if (minRating !== undefined) params.minRating = minRating;
      if (maxRating !== undefined) params.maxRating = maxRating;
      if (categories && categories.length > 0) params.categories = categories;
      if (brands && brands.length > 0) params.brands = brands;
      if (sort) params.sort = sort;

      // console.log(sort);
      // console.log(!!sort);
=======
import {Filters} from '../filters/filters.model';

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async (filters: Filters | {} = {}, {rejectWithValue}): Promise<Product[] | any> => {
    try {
      let params: Record<string, any> = {};
      Object.entries(filters).forEach(([key, value]) => {
        if (value) {
          params[key] = value;
        }
      });
>>>>>>> main

      return await axiosInstance.get(getAllProductsUrl, {params});
    } catch (error) {
      return handleApiError(error, rejectWithValue);
    }
  }
);
