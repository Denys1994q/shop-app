import * as yup from 'yup';
import {lowercaseRegex, uppercaseRegex, numbersRegex, symbolsRegex, onlyNumbersRegex} from './validationRegex';
import {validationErrors} from './validationErrors';
import {
  firstNameMaxValue,
  lastNameMaxValue,
  passwordLowercaseLettersAmount,
  passwordUppercaseLettersAmount,
  passwordNumbersAmount,
  passwordSymbolsAmount
} from './validation.constant';

export const signUpSchema = yup.object().shape({
  firstName: yup
    .string()
    .max(firstNameMaxValue, validationErrors.INVALID_MAX_VALUE(firstNameMaxValue))
    .required(validationErrors.FIELD_REQUIRED),
  lastName: yup
    .string()
    .max(lastNameMaxValue, validationErrors.INVALID_MAX_VALUE(lastNameMaxValue))
    .required(validationErrors.FIELD_REQUIRED),
  email: yup.string().email(validationErrors.INVALID_EMAIL).required(validationErrors.FIELD_REQUIRED),
  phoneNumber: yup.string().matches(onlyNumbersRegex, validationErrors.INVALID_FORMAT('phone number')).optional(),
  password: yup
    .string()
    .matches(
      lowercaseRegex,
      validationErrors.PASSWORD_INVALID_VALUE(`${passwordLowercaseLettersAmount} lowercase letters`)
    )
    .matches(
      uppercaseRegex,
      validationErrors.PASSWORD_INVALID_VALUE(`${passwordUppercaseLettersAmount} uppercase letters`)
    )
    .matches(numbersRegex, validationErrors.PASSWORD_INVALID_VALUE(`${passwordNumbersAmount} numbers`))
    .matches(symbolsRegex, validationErrors.PASSWORD_INVALID_VALUE(`${passwordSymbolsAmount} symbols`))
    .required(validationErrors.FIELD_REQUIRED),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], validationErrors.PASSWORDS_MUST_MATCH)
    .required(validationErrors.FIELD_REQUIRED)
});

export type SignUpSchemaType = yup.InferType<typeof signUpSchema>;
export type SignUpSchemaTypeAPI = Omit<SignUpSchemaType, 'confirmPassword'>;
