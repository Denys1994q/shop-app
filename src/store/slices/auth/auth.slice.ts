import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {registerUser, getUser, loginUser} from './auth.thunks';
import {AuthState} from './auth.model';

const initialState: AuthState = {
  user: null,
  error: null
};

const TodoSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetError: (state: AuthState) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state: AuthState) => {
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state: AuthState, action: PayloadAction<any>) => {
        localStorage.setItem('refreshToken', action.payload.refreshToken);
        localStorage.setItem('accessToken', action.payload.accessToken);
        state.error = null;
      })
      .addCase(registerUser.rejected, (state: AuthState, action: any) => {
        if (action.error.message) {
          state.error = action.error.message;
        }
      })
      .addCase(loginUser.pending, (state: AuthState) => {
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state: AuthState, action: PayloadAction<any>) => {
        localStorage.setItem('refreshToken', action.payload.refreshToken);
        localStorage.setItem('accessToken', action.payload.accessToken);
        state.error = null;
      })
      .addCase(loginUser.rejected, (state: AuthState, action: any) => {
        if (action.error.message) {
          state.error = action.error.message;
        }
      })
      .addCase(getUser.pending, (state: AuthState) => {
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state: AuthState, action: PayloadAction<any>) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(getUser.rejected, (state: AuthState, action: any) => {
        if (action.error.message) {
          state.error = action.error.message;
        }
      });
  }
});

export const {resetError} = TodoSlice.actions;

export default TodoSlice.reducer;
