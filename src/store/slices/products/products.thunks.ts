import {getAllProductsUrl} from '@/constants/api';
import axiosInstance from '@/services/axiosInstance';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosError, AxiosPromise} from 'axios';

export default createAsyncThunk('products/getAllProducts', async (): AxiosPromise => {
  try {
    return await axiosInstance.get(getAllProductsUrl);
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw error.response.data.message;
    }
    throw error;
  }
});
