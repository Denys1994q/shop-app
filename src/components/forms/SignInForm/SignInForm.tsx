import './SignInForm.sass';
import {FieldValues, Path, useForm} from 'react-hook-form';
import BasicTextField from '@/components/inputs/BasicTextField/BasicTextField';
import BasicBtn from '@/components/btns/BasicBtn/BasicBtn';
import {signInSchema, ISignIn} from '@/constants/signIn.validation';
import {yupResolver} from '@hookform/resolvers/yup';
import {SignInFields} from '@/models/signIn.enum';
import Typography from '@mui/material/Typography';

const fields = [
  {name: 'email', label: 'Email'},
  {name: 'password', label: 'Password'}
];

interface SignInFormProps {
  onSignUpClick: () => void;
}

const SignInForm: React.FC<SignInFormProps> = ({onSignUpClick}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: {errors}
  } = useForm({
    resolver: yupResolver(signInSchema)
  });

  const onSubmit = (data: ISignIn): void => {
    console.log(data);
  };

  const isPasswordField = (field: {name: Path<FieldValues>}): boolean => {
    return field.name === 'password';
  };

  const handleSignUpBtnClick = (): void => {
    onSignUpClick();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <BasicTextField
          key={field.name}
          type={isPasswordField(field) ? 'password' : 'text'}
          name={SignInFields[field.name as keyof typeof SignInFields]}
          control={control}
          label={field.label}
          className="signInForm__input"
        />
      ))}
      <BasicBtn type="submit" text="Login" />
      <Typography sx={{mt: 2}}>
        New customer?{' '}
        <span className="register-item" onClick={handleSignUpBtnClick}>
          Register.
        </span>
      </Typography>
    </form>
  );
};

export default SignInForm;
