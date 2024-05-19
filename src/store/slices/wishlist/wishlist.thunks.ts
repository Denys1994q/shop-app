import {addToWishlistUrl, removeFromWishlistUrl} from '@/constants/api';
import axiosInstance from '@/services/axiosInstance';
import {handleApiError} from '@/services/handleApiError';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Product} from '../products/products.model';

export const addToWishlist = createAsyncThunk(
  'auth/addToWishlist',
  async (product: Product, {rejectWithValue}): Promise<Product | any> => {
    try {
      await axiosInstance.patch(addToWishlistUrl(product._id));
      return product;
    } catch (error) {
      return handleApiError(error, rejectWithValue);
    }
  }
);

export const removeFromWishlist = createAsyncThunk(
  'auth/removeFromWishlist',
  async (id: string, {rejectWithValue}): Promise<Product | any> => {
    try {
      await axiosInstance.delete(removeFromWishlistUrl(id));
      return id;
    } catch (error) {
      return handleApiError(error, rejectWithValue);
    }
  }
);
