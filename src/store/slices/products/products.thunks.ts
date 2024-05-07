import {getAllProductsUrl} from '@/constants/api';
import axiosInstance from '@/services/axiosInstance';
import {handleApiError} from '@/services/handleApiError';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Product} from './products.model';

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async (_, {rejectWithValue}): Promise<Product[] | any> => {
    try {
      return await axiosInstance.get(getAllProductsUrl);
    } catch (error) {
      return handleApiError(error, rejectWithValue);
    }
  }
);
