import {RatingEnum} from '@/models/rating.enum';
import {StateEnum, CategoriesEnum, SubcategoriesEnum, SellerEnum} from '@/models/product.enum';
import {ErrorApi} from '@/models/errorApi.type';

interface DescriptionItem {
  label: string;
  value: string;
}

export interface Product {
  _id: string;
  title: string;
  categoryId: CategoriesEnum;
  subcategoryId: SubcategoriesEnum;
  description: string;
  detailedDescription?: DescriptionItem[];
  images: string[];
  price: number;
  quantity: number;
  seller: SellerEnum;
  brand: string;
  state: StateEnum;
  discount?: number;
  rating?: RatingEnum;
}

export interface ProductsState {
  products: Product[];
  productsError: ErrorApi;
}
