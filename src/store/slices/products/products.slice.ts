import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ProductsState} from './products.model';
import {Product} from './products.model';
import {getAllProducts} from './products.thunks';

const initialState: ProductsState = {
  products: [],
  productsError: null
};

const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.fulfilled, (state: ProductsState, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state: ProductsState, action: PayloadAction<any>) => {
        state.productsError = action.payload;
      });
  }
});

export const {} = ProductsSlice.actions;

export default ProductsSlice.reducer;
