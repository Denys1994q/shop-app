import {State} from '@/store/store';

export const selectProducts = (state: State) => state.productsSlice.products;
