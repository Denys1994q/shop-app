import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {WishlistState} from './wishlist.model';
import {Product} from '../products/products.model';
import {addToWishlist, removeFromWishlist} from './wishlist.thunks';

const initialState: WishlistState = {
  loading: false,
  wishlist: [],
  wishlistError: null
};

const WishlsitSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    setWishlist: (state: WishlistState, {payload}: PayloadAction<Product[]>) => {
      state.wishlist = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToWishlist.pending, (state: WishlistState) => {
        state.loading = true;
      })
      .addCase(addToWishlist.fulfilled, (state: WishlistState, {payload}: PayloadAction<Product>) => {
        state.loading = false;
        state.wishlist.push(payload);
      })
      .addCase(addToWishlist.rejected, (state: WishlistState, action: PayloadAction<any>) => {
        state.loading = false;
        state.wishlistError = action.payload;
      })
      .addCase(removeFromWishlist.pending, (state: WishlistState) => {
        state.loading = true;
      })
      .addCase(removeFromWishlist.fulfilled, (state: WishlistState, {payload}: PayloadAction<string>) => {
        state.loading = false;
        state.wishlist = state.wishlist.filter((product) => product._id !== payload);
      })
      .addCase(removeFromWishlist.rejected, (state: WishlistState, action: PayloadAction<any>) => {
        state.loading = false;
        state.wishlistError = action.payload;
      });
  }
});

export const {setWishlist} = WishlsitSlice.actions;

export default WishlsitSlice.reducer;
