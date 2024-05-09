export const validationErrors = {
  FIELD_REQUIRED: 'Field is required',
  INVALID_EMAIL: 'Invalid email format',
  PASSWORDS_MUST_MATCH: 'Passwords must match',
  INVALID_MAX_VALUE: (value: number) => `No more than ${value} characters`,
  INVALID_FORMAT: (value: string) => `Value must be a ${value}`,
  PASSWORD_INVALID_VALUE: (value: string) => `Password must contain at least ${value}`,
  INVALID_MIN_MAX_VALUES: 'The minimum value must be less than the maximum value'
};
