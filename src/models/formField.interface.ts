import {FieldType} from './fieldType.enum';

export interface FormField {
  name: string;
  label: string;
  fieldType?: FieldType;
  required?: boolean;
}
