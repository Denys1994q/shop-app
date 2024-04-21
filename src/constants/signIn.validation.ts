import * as yup from 'yup';
import {validationErrors} from './validationErrors';

export const signInSchema = yup.object().shape({
  email: yup.string().email(validationErrors.INVALID_EMAIL).required(validationErrors.FIELD_REQUIRED),
  password: yup.string().required(validationErrors.FIELD_REQUIRED)
});

export interface ISignIn extends yup.InferType<typeof signInSchema> {}
