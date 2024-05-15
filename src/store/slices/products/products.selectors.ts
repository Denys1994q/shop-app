import {State} from '@/store/store';

export const selectProducts = (state: State) => state.productsSlice.products;
export const selectTotal = (state: State) => state.productsSlice.total;
export const selectPages = (state: State) => state.productsSlice.pages;
