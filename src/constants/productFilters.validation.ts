import * as yup from 'yup';
import {validationErrors} from './validationErrors';

const {INVALID_MIN_MAX_VALUES} = validationErrors;

export const productFiltersSchema = yup.object().shape({
  priceRange: yup
    .array()
    .test('is-valid-range', INVALID_MIN_MAX_VALUES, (value) => value && value[0] < value[1])
    .required(),
  ratingRange: yup
    .array()
    .test('is-valid-range', INVALID_MIN_MAX_VALUES, (value) => value && value[0] < value[1])
    .required()
});

export type ProductFiltersSchemaType = yup.InferType<typeof productFiltersSchema>;
