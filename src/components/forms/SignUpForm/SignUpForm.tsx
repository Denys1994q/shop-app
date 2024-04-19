import './SignUpForm.sass';
import {useForm} from 'react-hook-form';
import BasicTextField from '@/components/inputs/BasicTextField/BasicTextField';
import BasicBtn from '@/components/btns/BasicBtn/BasicBtn';
import {signUpSchema} from '@/constants/signUp.validation';
import {yupResolver} from '@hookform/resolvers/yup';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber?: string;
}

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: {errors}
  } = useForm<FormData>({
    resolver: yupResolver(signUpSchema)
  });

  const onSubmit = (data: FormData): void => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="signUpForm__input">
        <BasicTextField name="firstName" control={control} label="First name" />
      </div>
      <div className="signUpForm__input">
        <BasicTextField name="lastName" control={control} label="Last name" />
      </div>
      <div className="signUpForm__input">
        <BasicTextField name="email" control={control} label="Email" />
      </div>
      <div className="signUpForm__input">
        <BasicTextField name="password" control={control} label="Password" />
      </div>
      <div className="signUpForm__input">
        <BasicTextField name="phoneNumber" control={control} label="Phone number" />
      </div>
      <BasicBtn type="submit" text="Register" />
    </form>
  );
};

export default SignUpForm;
