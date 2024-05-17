export interface Filters {
  priceRange: number[];
  ratingRange: number[];
  categories: [];
  brands: [];
  sort: string | number;
}

export interface FiltersState {
  filters: Filters;
}
