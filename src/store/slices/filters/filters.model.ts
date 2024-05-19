export interface Filters {
  priceRange: number[];
  ratingRange: number[];
  categories: [];
  brands: [];
  sort: number;
}

export interface FiltersState {
  filters: Filters;
}
