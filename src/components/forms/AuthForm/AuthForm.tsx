import {useState} from 'react';
import SignInForm from '../SignInForm/SignInForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import {SignUpSchemaType} from '@/constants/signUp.validation';
import {SignInSchemaType} from '@/constants/signIn.validation';
import {useAppDispatch} from '@/store/hooks';
import FormLink from '../FormLink/FormLink';
import {getUser, loginUser, registerUser} from '@/store/slices/auth/auth.thunks';
import {closeDialog} from '@/store/slices/dialog/dialog.slice';
import {openToast} from '@/store/slices/toast/toast.slice';
import {ToastEnum} from '@/models/toast.enum';
import {SuccessToastMessages} from '@/constants/toastMessages.constant';

const loginFormLinkText = 'Already have an account?';
const registerFormLinkText = 'New customer?';

const AuthForm = () => {
  const dispatch = useAppDispatch();
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

  const handleSignUpFormSumbit = async (signUpForm: SignUpSchemaType): Promise<void> => {
    const {confirmPassword, ...userData} = signUpForm;
    try {
      await dispatch(registerUser(userData)).unwrap();
      closeDialogAndGetUser(SuccessToastMessages.REGISTER);
    } catch (error) {
      dispatch(openToast({message: error as string, type: ToastEnum.ERROR}));
    }
  };

  const handleSignInFormSubmit = async (signInForm: SignInSchemaType): Promise<void> => {
    try {
      await dispatch(loginUser(signInForm)).unwrap();
      closeDialogAndGetUser(SuccessToastMessages.LOGIN);
    } catch (error) {
      dispatch(openToast({message: error as string, type: ToastEnum.ERROR}));
    }
  };

  const closeDialogAndGetUser = (toastMessage: SuccessToastMessages): void => {
    dispatch(openToast({message: toastMessage, type: ToastEnum.SUCCESS}));
    dispatch(closeDialog());
    dispatch(getUser());
  };

  const toggleForm = (): void => {
    setIsLoginForm((isLoginForm) => !isLoginForm);
  };

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
