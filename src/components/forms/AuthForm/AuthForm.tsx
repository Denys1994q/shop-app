import {useState} from 'react';
import SignInForm from '../SignInForm/SignInForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import {SignUpSchemaType} from '@/constants/signUp.validation';
import {SignInSchemaType} from '@/constants/signIn.validation';
import {useAppDispatch} from '@/store/hooks';
import FormLink from '../FormLink/FormLink';
import {getUser, loginUser, registerUser} from '@/store/slices/auth/auth.thunks';
import {closeDialog} from '@/store/slices/dialog/dialog.slice';

const AuthForm = () => {
  const dispatch = useAppDispatch();
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleSignUpFormSumbit = async (signUpForm: SignUpSchemaType): Promise<void> => {
    const {confirmPassword, ...userData} = signUpForm;
    const result = await dispatch(registerUser(userData)).unwrap();
    if (!result.error) {
      closeDialogAndGetUser();
    }
  };

  const handleSignInFormSubmit = async (signInForm: SignInSchemaType): Promise<void> => {
    const result = await dispatch(loginUser(signInForm)).unwrap();
    if (!result.error) {
      closeDialogAndGetUser();
    }
  };

  const closeDialogAndGetUser = (): void => {
    dispatch(closeDialog());
    dispatch(getUser());
  };

  const toggleForm = (): void => {
    setIsLoginForm((isLoginForm) => !isLoginForm);
  };

  const loginFormLinkText = 'Already have an account?';
  const registerFormLinkText = 'New customer?';

  return (
    <>
      {isLoginForm ? (
        <SignInForm onFormSubmit={handleSignInFormSubmit} />
      ) : (
        <SignUpForm onFormSubmit={handleSignUpFormSumbit} />
      )}
      <FormLink
        text={isLoginForm ? loginFormLinkText : registerFormLinkText}
        to={isLoginForm ? 'Register' : 'Sign In'}
        onClick={toggleForm}
      />
    </>
  );
};

export default AuthForm;
