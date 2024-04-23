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

const fields: FormField[] = [
  {name: 'firstName', label: 'First name', fieldType: FieldType.TEXT},
  {name: 'lastName', label: 'Last name', fieldType: FieldType.TEXT},
  {name: 'email', label: 'Email', fieldType: FieldType.TEXT},
  {name: 'password', label: 'Password', fieldType: FieldType.PASSWORD},
  {name: 'confirmPassword', label: 'Confirm password', fieldType: FieldType.PASSWORD},
  {name: 'phoneNumber', label: 'Phone number', fieldType: FieldType.TEXT}
];

const SignUpForm: FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: {errors}
  } = useForm({
    resolver: yupResolver(signUpSchema)
  });

  const onSubmit = (data: SignUpSchemaType): void => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <BasicTextField
          key={field.name}
          type={field.fieldType}
          name={SignUpFields[field.name.toUpperCase() as keyof typeof SignUpFields]}
          control={control}
          label={field.label}
          className="signUpForm__input"
        />
      ))}
      <BasicBtn type="submit" text="Register" />
    </form>
  );
};

export default SignUpForm;
