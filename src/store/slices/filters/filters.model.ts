export interface Filters {
  priceRange: number[];
  ratingRange: number[];
  categories: [];
  brands: [];
}

export interface FiltersState {
  filters: Filters;
}
