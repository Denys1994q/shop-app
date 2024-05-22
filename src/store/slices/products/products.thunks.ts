import {getAllProductsUrl, getOneProductUrl} from '@/constants/api';
import axiosInstance from '@/services/axiosInstance';
import {handleApiError} from '@/services/handleApiError';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Product} from './products.model';
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

      return await axiosInstance.get(getAllProductsUrl, {params});
    } catch (error) {
      return handleApiError(error, rejectWithValue);
    }
  }
);

export const getOneProduct = createAsyncThunk(
  'products/getOneProduct',
  async (id: string, {rejectWithValue}): Promise<any> => {
    try {
      return await axiosInstance.get(getOneProductUrl(id));
    } catch (error) {
      return handleApiError(error, rejectWithValue);
    }
  }
);
