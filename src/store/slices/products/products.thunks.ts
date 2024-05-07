import {getAllProductsUrl} from '@/constants/api';
import axiosInstance from '@/services/axiosInstance';
import {handleApiError} from '@/services/handleApiError';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosPromise} from 'axios';

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async (_, {rejectWithValue}): AxiosPromise => {
    try {
      return await axiosInstance.get(getAllProductsUrl);
    } catch (error) {
      return handleApiError(error, rejectWithValue);
    }
  }
);
