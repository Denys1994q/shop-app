import {useAppSelector} from '@/store/hooks';
import {State} from '@/store/store';

export const selectWishlist = (state: State) => state.wishlistSlice.wishlist;
export const selectWishlistLoading = (state: State) => state.wishlistSlice.loading;

export const useSelectWishlist = () => useAppSelector(selectWishlist);
export const useSelectWishlistLoading = () => useAppSelector(selectWishlistLoading);
