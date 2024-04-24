import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {registerUser, getUser, loginUser} from './auth.thunks';
import {AuthState} from './auth.model';

const initialState: AuthState = {
  user: null,
  signUpError: null,
  signInError: null,
  getUserError: null
};

const TodoSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetErrors: (state: AuthState) => {
      state.signUpError = null;
      state.signInError = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state: AuthState) => {
        state.signUpError = null;
      })
      .addCase(registerUser.fulfilled, (state: AuthState, action: PayloadAction<any>) => {
        localStorage.setItem('refreshToken', action.payload.refreshToken);
        localStorage.setItem('accessToken', action.payload.accessToken);
        state.signUpError = null;
      })
      .addCase(registerUser.rejected, (state: AuthState, action: any) => {
        if (action.error.message) {
          state.signUpError = action.error.message;
        }
      })
      .addCase(loginUser.pending, (state: AuthState) => {
        state.signInError = null;
      })
      .addCase(loginUser.fulfilled, (state: AuthState, action: PayloadAction<any>) => {
        localStorage.setItem('refreshToken', action.payload.refreshToken);
        localStorage.setItem('accessToken', action.payload.accessToken);
        state.signInError = null;
      })
      .addCase(loginUser.rejected, (state: AuthState, action: any) => {
        if (action.error.message) {
          state.signInError = action.error.message;
        }
      })
      .addCase(getUser.pending, (state: AuthState) => {
        state.getUserError = null;
      })
      .addCase(getUser.fulfilled, (state: AuthState, action: PayloadAction<any>) => {
        state.user = action.payload;
        state.getUserError = null;
      })
      .addCase(getUser.rejected, (state: AuthState, action: any) => {
        if (action.error.message) {
          state.getUserError = action.error.message;
        }
      });
  }
});

export const {resetErrors} = TodoSlice.actions;

export default TodoSlice.reducer;
