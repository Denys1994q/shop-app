import {CategoriesEnum} from '@/models/product.enum';
import {BrandsEnum} from '@/models/product.enum';

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
