export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
}

export interface AuthState {
  user: User | null;
  signUpError: string | null;
  signInError: string | null;
  getUserError: string | null;
}
