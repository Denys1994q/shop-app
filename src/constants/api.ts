export const baseUrl = 'http://localhost:3000';
export const registerUserUrl = 'auth/signUp';
export const loginUserUrl = 'auth/signIn';
export const getUserUrl = 'auth/me';
export const refreshTokensUrl = 'auth/refresh';
export const logoutUserUrl = 'auth/logout';
export const getAllProductsUrl = 'product';
export const getOneProductUrl = (id: string): string => {
  return `/product/${id}`;
};
export const addToWishlistUrl = (id: string): string => {
  return `/auth/wishlist/${id}`;
};
export const removeFromWishlistUrl = (id: string): string => {
  return `/auth/wishlist/${id}`;
};
