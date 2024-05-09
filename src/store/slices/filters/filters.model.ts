export interface Filters {
  priceRange: number[];
  ratingRange: number[];
}

export interface FiltersState {
  filters: Filters;
}
