import axios, {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import {baseUrl} from '@constants/api';
import {updateTokens, removeTokens, refreshTokens} from '@services/tokens.service';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<any>) => response.data,
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.request.use((config): InternalAxiosRequestConfig<any> => {
  const accessToken = window.localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest: any = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const data = await refreshTokens();
        const {accessToken, refreshToken} = data;
        updateTokens(accessToken, refreshToken);

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        removeTokens();
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
