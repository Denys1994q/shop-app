import {AxiosError, InternalAxiosRequestConfig} from 'axios';
import {useDispatch} from 'react-redux';
import axiosInstance from '@/services/axiosInstance';
import {setLoading} from '@/store/slices/loading/loading.slice';
import {refreshTokens, removeTokens, updateTokens} from '@/services/tokens.service';

const useAxiosInterceptor = () => {
  const dispatch = useDispatch();

  axiosInstance.interceptors.request.use((config): InternalAxiosRequestConfig<any> => {
    dispatch(setLoading(true));
    const accessToken = window.localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      dispatch(setLoading(false));
      return response;
    },
    async (error: AxiosError) => {
      dispatch(setLoading(false));
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

  return null;
};

export default useAxiosInterceptor;
