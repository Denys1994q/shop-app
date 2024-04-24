import './SignInForm.sass';
import {useForm} from 'react-hook-form';
import BasicTextField from '@/components/inputs/BasicTextField/BasicTextField';
import BasicBtn from '@/components/btns/BasicBtn/BasicBtn';
import {signInSchema, SignInSchemaType} from '@/constants/signIn.validation';
import {yupResolver} from '@hookform/resolvers/yup';
import {SignInFields} from '@/models/signIn.enum';
import Typography from '@mui/material/Typography';
import {FormField} from '@/models/formField.interface';
import {FieldType} from '@/models/fieldType.enum';

const fields: FormField[] = [
  {name: 'email', label: 'Email', required: true},
  {name: 'password', label: 'Password', fieldType: FieldType.PASSWORD, required: true}
];

interface SignInFormProps {
  onSignUpClick: () => void;
  onFormSubmit: (data: SignInSchemaType) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({onSignUpClick, onFormSubmit}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: {errors}
  } = useForm({
    resolver: yupResolver(signInSchema)
  });

  const onSubmit = (data: SignInSchemaType): void => {
    onFormSubmit(data);
  };

  const handleSignUpBtnClick = (): void => {
    onSignUpClick();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography fontSize={20} sx={{mb: 2, textAlign: 'center'}}>
        Log in
      </Typography>
      {fields.map((field) => (
        <BasicTextField
          key={field.name}
          required={field.required}
          type={field.fieldType}
          name={SignInFields[field.name.toUpperCase() as keyof typeof SignInFields]}
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
