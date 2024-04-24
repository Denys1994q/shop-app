import {baseUrl, refreshTokensUrl} from '@/constants/api';
import axios from 'axios';

export const updateTokens = (accessToken: string, refreshToken: string): void => {
  window.localStorage.setItem('accessToken', accessToken);
  window.localStorage.setItem('refreshToken', refreshToken);
};

export const removeTokens = (): void => {
  window.localStorage.removeItem('accessToken');
  window.localStorage.removeItem('refreshToken');
};

export const refreshTokens = async (): Promise<{accessToken: string; refreshToken: string}> => {
  const refreshTokenFromLocalStorage = window.localStorage.getItem('refreshToken');
  const {data} = await axios.get(`${baseUrl}/${refreshTokensUrl}`, {
    headers: {
      Authorization: `Bearer ${refreshTokenFromLocalStorage}`
    }
  });
  return data;
};
