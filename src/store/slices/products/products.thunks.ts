import {getAllProductsUrl} from '@/constants/api';
import axiosInstance from '@/services/axiosInstance';
import {handleApiError} from '@/services/handleApiError';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Product} from './products.model';

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async (filters: any = {}, {rejectWithValue}): Promise<Product[] | any> => {
    try {
      const {minPrice, maxPrice, minRating, maxRating, categories, brands} = filters;
      let params: any = {};
      if (minPrice !== undefined) params.minPrice = minPrice;
      if (maxPrice !== undefined) params.maxPrice = maxPrice;
      if (minRating !== undefined) params.minRating = minRating;
      if (maxRating !== undefined) params.maxRating = maxRating;
      if (categories && categories.length > 0) params.categories = categories;
      if (brands && brands.length > 0) params.brands = brands;

      return await axiosInstance.get(getAllProductsUrl, {params});
    } catch (error) {
      return handleApiError(error, rejectWithValue);
    }
  }
);
