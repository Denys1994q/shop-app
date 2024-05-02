import {ErrorApi} from '@/models/errorApi.type';

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
}

export interface AuthState {
  user: User | null;
  signUpError: ErrorApi;
  signInError: ErrorApi;
  getUserError: ErrorApi;
  logoutUserError: ErrorApi;
}
