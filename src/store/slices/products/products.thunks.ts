import {getAllProductsUrl} from '@/constants/api';
import axiosInstance from '@/services/axiosInstance';
import {handleApiError} from '@/services/handleApiError';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Product} from './products.model';

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async ({minPrice, maxPrice, minRating, maxRating}: any, {rejectWithValue}): Promise<Product[] | any> => {
    try {
      if (minPrice && maxPrice && minRating && maxRating) {
        return await axiosInstance.get(getAllProductsUrl, {params: {minPrice, maxPrice, minRating, maxRating}});
      } else {
        return await axiosInstance.get(getAllProductsUrl);
      }
    } catch (error) {
      return handleApiError(error, rejectWithValue);
    }
  }
);
