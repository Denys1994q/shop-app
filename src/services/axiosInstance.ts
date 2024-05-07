import axios, {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import {baseUrl} from '@constants/api';
import {hideLoading, showLoading} from '@/store/slices/loading/loading.slice';
import {refreshTokens, removeTokens, updateTokens} from './tokens.service';
import {openToast} from '@/store/slices/toast/toast.slice';

let store: any;
let numberOfAjaxCAllPending = 0;

export const injectStore = (_store: any): void => {
  store = _store;
};

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use((config): InternalAxiosRequestConfig => {
  numberOfAjaxCAllPending++;
  store.dispatch(showLoading());
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<any>) => response.data,
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    numberOfAjaxCAllPending--;
    if (numberOfAjaxCAllPending === 0) {
      store.dispatch(hideLoading());
    }
    return response;
  },
  async (error: AxiosError) => {
    numberOfAjaxCAllPending--;
    if (numberOfAjaxCAllPending === 0) {
      store.dispatch(hideLoading());
    }
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
