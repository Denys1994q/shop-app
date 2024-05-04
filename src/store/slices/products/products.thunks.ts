import {getAllProductsUrl} from '@/constants/api';
import axiosInstance from '@/services/axiosInstance';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosError} from 'axios';

export const getAllProducts = createAsyncThunk('products/getAllProducts', async (): Promise<any> => {
  try {
    return await axiosInstance.get(getAllProductsUrl);
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw error.response.data.message;
    }
    throw error;
  }
});