import {registerUserUrl, loginUserUrl, getUserUrl, logoutUserUrl} from '@/constants/api';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {SignInSchemaType} from '@/constants/signIn.validation';
import {SignUpSchemaTypeAPI} from '@/constants/signUp.validation';
import axiosInstance from '@/services/axiosInstance';
import {handleApiError} from '@/services/handleApiError';
import {Tokens} from '@/services/tokens.service';
import {User} from './auth.model';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData: SignUpSchemaTypeAPI, {rejectWithValue}): Promise<Tokens | any> => {
    try {
      return await axiosInstance.post(registerUserUrl, userData);
    } catch (error) {
      return handleApiError(error, rejectWithValue);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData: SignInSchemaType, {rejectWithValue}): Promise<Tokens | any> => {
    try {
      return await axiosInstance.post(loginUserUrl, userData);
    } catch (error) {
      return handleApiError(error, rejectWithValue);
    }
  }
);

export const getUser = createAsyncThunk('auth/getUser', async (_, {rejectWithValue}): Promise<User | any> => {
  try {
    return await axiosInstance.get(getUserUrl);
  } catch (error) {
    return handleApiError(error, rejectWithValue);
  }
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async (_, {rejectWithValue}): Promise<any> => {
  try {
    return await axiosInstance.get(logoutUserUrl);
  } catch (error) {
    return handleApiError(error, rejectWithValue);
  }
});
