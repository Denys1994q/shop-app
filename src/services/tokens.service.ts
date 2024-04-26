import {baseUrl, refreshTokensUrl} from '@/constants/api';
import axios from 'axios';

export const updateTokens = (accessToken: string, refreshToken: string): void => {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};

export const removeTokens = (): void => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

export const refreshTokens = async (): Promise<{accessToken: string; refreshToken: string}> => {
  const refreshTokenFromLocalStorage = localStorage.getItem('refreshToken');
  const {data} = await axios.get(`${baseUrl}/${refreshTokensUrl}`, {
    headers: {
      Authorization: `Bearer ${refreshTokenFromLocalStorage}`
    }
  });
  return data;
};
