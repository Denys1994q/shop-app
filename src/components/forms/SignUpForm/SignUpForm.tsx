import './SignUpForm.sass';
import {FieldValues, Path, useForm} from 'react-hook-form';
import BasicTextField from '@/components/inputs/BasicTextField/BasicTextField';
import BasicBtn from '@/components/btns/BasicBtn/BasicBtn';
import {signUpSchema, ISignUp} from '@/constants/signUp.validation';
import {yupResolver} from '@hookform/resolvers/yup';
import {SignUpFields} from '@/models/signUp.enum';

const fields = [
  {name: 'firstName', label: 'First name'},
  {name: 'lastName', label: 'Last name'},
  {name: 'email', label: 'Email'},
  {name: 'password', label: 'Password'},
  {name: 'confirmPassword', label: 'Confirm password'},
  {name: 'phoneNumber', label: 'Phone number'}
];

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: {errors}
  } = useForm({
    resolver: yupResolver(signUpSchema)
  });

  const onSubmit = (data: ISignUp): void => {
    console.log(data);
  };

  const isPasswordField = (field: {name: Path<FieldValues>}): boolean => {
    return field.name === 'password' || field.name === 'confirmPassword';
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <BasicTextField
          key={field.name}
          type={isPasswordField(field) ? 'password' : 'text'}
          name={SignUpFields[field.name as keyof typeof SignUpFields]}
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
