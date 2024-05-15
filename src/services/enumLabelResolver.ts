import {CategoriesEnum} from '@/models/product.enum';

const enumLabelResolver = {
  categories: {
    [CategoriesEnum.COMPUTERS_LAPTOPS]: 'Compters, laptops',
    [CategoriesEnum.GAME_ZONE]: 'Game Zone',
    [CategoriesEnum.HOUSEHOLD_APPLIANCES]: 'Household appliances',
    [CategoriesEnum.SPORT]: 'Sport',
    [CategoriesEnum.SMARTPHONES_TV_ELECTRONICS]: 'Smartphones, TV, Electronics'
  }
};

export const categoriesOptions = Object.entries(enumLabelResolver.categories).map(([value, label]) => ({
  label,
  value: +value
}));
