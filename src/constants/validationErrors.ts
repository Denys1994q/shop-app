export const validationErrors = {
  FIELD_REQUIRED: 'Field is required',
  INVALID_EMAIL: 'Invalid email format',
  INVALID_MAX_VALUE: (value: number) => `No more than ${value} characters`,
  INVALID_FORMAT: (value: string) => `Value must be a ${value}`,
  PASSWORD_INVALID_VALUE: (value: string) => `Password must contain at least ${value}`
};
