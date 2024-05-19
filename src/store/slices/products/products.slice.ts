import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Product, ProductsState} from './products.model';
import {getAllProducts} from './products.thunks';

const initialState: ProductsState = {
  products: [],
  total: 0,
  pages: 0,
  productsError: null,
  countByCategory: []
};

const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getAllProducts.fulfilled,
        (state: ProductsState, action: PayloadAction<{products: Product[]; total: number; pages: number}>) => {
          state.products = action.payload.products;
          state.total = action.payload.total;
          state.pages = action.payload.pages;
          state.countByCategory = action.payload.countByCategory;
        }
      )
      .addCase(getAllProducts.rejected, (state: ProductsState, action: PayloadAction<any>) => {
        state.productsError = action.payload;
      });
  }
});

export const {} = ProductsSlice.actions;

export default ProductsSlice.reducer;
