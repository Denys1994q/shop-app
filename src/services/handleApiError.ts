import {AxiosPromise} from 'axios';

type ErrorResponseType = {response: {[key: string]: {message: string}}};

export const handleApiError = (
  error: ErrorResponseType | unknown,
  rejectWithValue: (value: unknown) => any
): AxiosPromise<any> => {
  const hasErrResponse = (error as ErrorResponseType).response;
  if (!hasErrResponse) {
    throw error;
  }

  return rejectWithValue(hasErrResponse.data.message);
};
