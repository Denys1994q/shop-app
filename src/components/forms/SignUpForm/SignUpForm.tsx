import './SignUpForm.sass';
import {useForm} from 'react-hook-form';
import BasicTextField from '@/components/inputs/BasicTextField/BasicTextField';
import BasicBtn from '@/components/btns/BasicBtn/BasicBtn';
import {signUpSchema, SignUpSchemaType} from '@/constants/signUp.validation';
import {yupResolver} from '@hookform/resolvers/yup';
import {SignUpFields} from '@/models/signUp.enum';
import {FC} from 'react';
import {FieldType} from '@/models/fieldType.enum';
import {FormField} from '@/models/formField.interface';
import BasicError from '@/components/BasicError/BasicError';

const fields: FormField[] = [
  {name: 'firstName', label: 'First name', required: true},
  {name: 'lastName', label: 'Last name', required: true},
  {name: 'email', label: 'Email', required: true},
  {name: 'password', label: 'Password', fieldType: FieldType.PASSWORD, required: true},
  {name: 'confirmPassword', label: 'Confirm password', fieldType: FieldType.PASSWORD, required: true},
  {name: 'phoneNumber', label: 'Phone number'}
];

interface SignUpFormProps {
  onFormSubmit: (data: SignUpSchemaType) => void;
  error?: string | null;
}

const SignUpForm: FC<SignUpFormProps> = ({onFormSubmit, error}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: {errors}
  } = useForm({
    resolver: yupResolver(signUpSchema)
  });

  const onSubmit = (data: SignUpSchemaType): void => {
    onFormSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <BasicTextField
          key={field.name}
          type={field.fieldType}
          required={field.required}
          name={SignUpFields[field.name.toUpperCase() as keyof typeof SignUpFields]}
          control={control}
          label={field.label}
          className="signUpForm__input"
        />
      ))}
      <BasicBtn type="submit" text="Register" />
      {error && <BasicError text={error} />}
    </form>
  );
};

export default SignUpForm;
