import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Product, ProductsState} from './products.model';
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
      .addCase(getAllProducts.fulfilled, (state: ProductsState, action: PayloadAction<{products: Product[]}>) => {
        state.products = action.payload.products;
      })
      .addCase(getAllProducts.rejected, (state: ProductsState, action: PayloadAction<any>) => {
        state.productsError = action.payload;
      });
  }
});

export const {} = ProductsSlice.actions;

export default ProductsSlice.reducer;
