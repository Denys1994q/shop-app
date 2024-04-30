import axios, {AxiosResponse} from 'axios';
import {baseUrl} from '@constants/api';

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

export default axiosInstance;
