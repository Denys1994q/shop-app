import axios, {AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import {baseUrl} from '@constants/api';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.response.use((response: AxiosResponse<any>) => response.data);

axiosInstance.interceptors.request.use((config): InternalAxiosRequestConfig<any> => {
  const accessToken = window.localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default axiosInstance;
