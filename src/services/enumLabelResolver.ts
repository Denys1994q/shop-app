import {CategoriesEnum, BrandsEnum} from '@/models/product.enum';
import {SortProductEnum} from '@/models/sortProduct.enum';

const enumLabelResolver = {
  categories: {
    [CategoriesEnum.COMPUTERS_LAPTOPS]: 'Computers, laptops',
    [CategoriesEnum.GAME_ZONE]: 'Game Zone',
    [CategoriesEnum.HOUSEHOLD_APPLIANCES]: 'Household appliances',
    [CategoriesEnum.SPORT]: 'Sport',
    [CategoriesEnum.SMARTPHONES_TV_ELECTRONICS]: 'Smartphones, TV, Electronics'
  },
  brands: {
    [BrandsEnum.APPLE]: 'Apple',
    [BrandsEnum.SONY]: 'Sony',
    [BrandsEnum.PHILIPS]: 'Philips',
    [BrandsEnum.TOSHIBA]: 'Toshiba',
    [BrandsEnum.LG]: 'LG',
    [BrandsEnum.SAMSUNG]: 'Samsung',
    [BrandsEnum.ZTE]: 'ZTE',
    [BrandsEnum.MOTOROLA]: 'Motorola',
    [BrandsEnum.TECHNO]: 'Techno',
    [BrandsEnum.NOKIA]: 'Nokia',
    [BrandsEnum.XIAOMI]: 'Xiaomi',
    [BrandsEnum.POCO]: 'Poco',
    [BrandsEnum.BEKO]: 'Beko',
    [BrandsEnum.GORENJE]: 'Gorenje',
    [BrandsEnum.INDESIT]: 'Indesit',
    [BrandsEnum.CORRADO]: 'Corrado',
    [BrandsEnum.BRAIN]: 'Brain',
    [BrandsEnum.FORMULA]: 'Formula'
  },
  sortProduct: {
    [SortProductEnum.FROM_CHEAP_TO_EXPENSIVE]: 'From cheap to expensive',
    [SortProductEnum.FROM_EXPENSIVE_TO_CHEAP]: 'From expensive to cheap'
  }
};

export const categoriesOptions = Object.entries(enumLabelResolver.categories).map(([value, label]) => ({
  label,
  value: +value
}));

export const brandsOptions = Object.entries(enumLabelResolver.brands).map(([value, label]) => ({
  label,
  value: +value
}));

export const sortProductOptions = Object.entries(enumLabelResolver.sortProduct).map(([value, label]) => ({
  label,
  value: +value
}));
