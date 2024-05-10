import {getAllProductsUrl} from '@/constants/api';
import axiosInstance from '@/services/axiosInstance';
import {handleApiError} from '@/services/handleApiError';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Product} from './products.model';

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async ({minPrice, maxPrice, minRating, maxRating, categories}: any, {rejectWithValue}): Promise<Product[] | any> => {
    try {
      // console.log(categories);
      // const categories = categoris.length > 0 ? categoris : null;
      if (minPrice && maxPrice && minRating && maxRating) {
        console.log(1);
        return await axiosInstance.get(getAllProductsUrl, {
          params: {minPrice, maxPrice, minRating, maxRating, categories: categories.length > 0 ? categories : null}
        });
      } else {
        console.log(2);
        return await axiosInstance.get(getAllProductsUrl);
      }
    } catch (error) {
      return handleApiError(error, rejectWithValue);
    }
  }
);
