import {getAllProductsUrl, getOneProductUrl} from '@/constants/api';
import axiosInstance from '@/services/axiosInstance';
import {handleApiError} from '@/services/handleApiError';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Product} from './products.model';

// export const getAllProducts = createAsyncThunk(
//   'products/getAllProducts',
//   async (filters: any = {}, {rejectWithValue}): Promise<Product[] | any> => {
//     try {
//       const {minPrice, maxPrice, minRating, maxRating, categories, brands, sort, page = 1} = filters;
//       let params: any = {};
//       if (minPrice !== undefined) params.minPrice = minPrice;
//       if (maxPrice !== undefined) params.maxPrice = maxPrice;
//       if (minRating !== undefined) params.minRating = minRating;
//       if (maxRating !== undefined) params.maxRating = maxRating;
//       if (categories && categories.length > 0) params.categories = categories;
//       if (brands && brands.length > 0) params.brands = brands;
//       if (sort) params.sort = sort;
//       if (page) params.page = page;

//       return await axiosInstance.get(getAllProductsUrl, {params});
//     } catch (error) {
//       return handleApiError(error, rejectWithValue);
//     }
//   }
// );

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async (filters: any = {}, {rejectWithValue}): Promise<Product[] | any> => {
    try {
      const {minPrice, maxPrice, minRating, maxRating, categories, brands, sort, page = 1, pageSize = 5} = filters;
      let params: any = {};
      if (minPrice !== undefined) params.minPrice = minPrice;
      if (maxPrice !== undefined) params.maxPrice = maxPrice;
      if (minRating !== undefined) params.minRating = minRating;
      if (maxRating !== undefined) params.maxRating = maxRating;
      if (categories && categories.length > 0) params.categories = categories;
      if (brands && brands.length > 0) params.brands = brands;
      if (sort) params.sort = sort;
      if (page) params.page = page;
      if (pageSize) params.pageSize = pageSize;

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
