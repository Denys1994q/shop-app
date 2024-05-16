export interface Filters {
  priceRange: number[];
  ratingRange: number[];
  categories: [];
}

export interface FiltersState {
  filters: Filters;
}
