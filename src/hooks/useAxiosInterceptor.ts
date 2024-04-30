import {AxiosError, InternalAxiosRequestConfig} from 'axios';
import {useDispatch} from 'react-redux';
import axiosInstance from '@/services/axiosInstance';
import {showLoading, hideLoading} from '@/store/slices/loading/loading.slice';
import {useEffect} from 'react';

const useAxiosInterceptor = () => {
  const dispatch = useDispatch();
  let numberOfAjaxCAllPending = 0;

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use((config): InternalAxiosRequestConfig => {
      numberOfAjaxCAllPending++;
      dispatch(showLoading());
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    });

    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => {
        numberOfAjaxCAllPending--;
        if (numberOfAjaxCAllPending == 0) {
          dispatch(hideLoading());
        }
        return response;
      },
      async (error: AxiosError) => {
        numberOfAjaxCAllPending--;
        if (numberOfAjaxCAllPending == 0) {
          dispatch(hideLoading());
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [dispatch]);

  return null;
};

export default useAxiosInterceptor;
