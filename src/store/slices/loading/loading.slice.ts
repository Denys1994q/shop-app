import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface LoadingState {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: false
};

const LoadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading(state: LoadingState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    }
  }
});

export const {setLoading} = LoadingSlice.actions;

export default LoadingSlice.reducer;
