import {Product} from '../products/products.model';
import {ErrorApi} from '@/models/errorApi.type';

export interface WishlistState {
  loading: boolean;
  wishlist: Product[];
  wishlistError: ErrorApi;
}
