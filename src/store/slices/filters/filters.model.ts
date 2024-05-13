export interface Filters {
  priceRange: number[];
  ratingRange: number[];
  categories: [];
  brands: [];
  sort: any;
}

export interface FiltersState {
  filters: Filters;
}
