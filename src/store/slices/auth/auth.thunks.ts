import {registerUserUrl, loginUserUrl, getUserUrl} from '@/constants/api';
import axiosInstance from '@/services/axiosInstance';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosError, AxiosResponse} from 'axios';
import {SignInSchemaType} from '@/constants/signIn.validation';
import {SignUpSchemaTypeAPI} from '@/constants/signUp.validation';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData: SignUpSchemaTypeAPI): Promise<any> => {
    try {
      const response: AxiosResponse = await axiosInstance.post(registerUserUrl, userData);
      return response;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        throw error.response.data.message;
      }
      throw error;
    }
  }
);

export const loginUser = createAsyncThunk('auth/loginUser', async (userData: SignInSchemaType): Promise<any> => {
  try {
    const response: AxiosResponse = await axiosInstance.post(loginUserUrl, userData);
    return response;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw error.response.data.message;
    }
    throw error;
  }
});

export const getUser = createAsyncThunk('auth/getUser', async (): Promise<any> => {
  try {
    const response: AxiosResponse = await axiosInstance.get(getUserUrl);
    return response;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      throw error.response.data.message;
    }
    throw error;
  }
});
