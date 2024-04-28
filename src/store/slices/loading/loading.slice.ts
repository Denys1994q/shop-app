import {createSlice} from '@reduxjs/toolkit';

export interface LoadingState {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: false
};

const LoadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    showLoading(state: LoadingState) {
      state.isLoading = true;
    },
    hideLoading(state: LoadingState) {
      state.isLoading = false;
    }
  }
});

export const {showLoading, hideLoading} = LoadingSlice.actions;

export default LoadingSlice.reducer;
