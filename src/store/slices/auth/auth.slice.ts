import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {registerUser, getUser, loginUser, logoutUser} from './auth.thunks';
import {AuthState} from './auth.model';
import {removeTokens} from '@/services/tokens.service';

const initialState: AuthState = {
  user: null,
  signUpError: null,
  signInError: null,
  getUserError: null,
  logoutUserError: null
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
      .addCase(registerUser.rejected, (state: AuthState, action: PayloadAction<any>) => {
        state.signUpError = action.payload;
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
        state.signInError = action.payload;
      })
      .addCase(getUser.pending, (state: AuthState) => {
        state.getUserError = null;
      })
      .addCase(getUser.fulfilled, (state: AuthState, action: PayloadAction<any>) => {
        state.user = action.payload;
        state.getUserError = null;
      })
      .addCase(getUser.rejected, (state: AuthState, action: any) => {
        state.getUserError = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state: AuthState, action: PayloadAction<any>) => {
        state.user = null;
        removeTokens();
        state.logoutUserError = null;
      })
      .addCase(logoutUser.rejected, (state: AuthState, action: any) => {
        state.logoutUserError = action.payload;
      });
  }
});

export const {resetErrors} = TodoSlice.actions;

export default TodoSlice.reducer;
