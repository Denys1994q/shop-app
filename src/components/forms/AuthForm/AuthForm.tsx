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
import {setWishlist} from '@/store/slices/wishlist/wishlist.slice';
import {Product} from '@/store/slices/products/products.model';

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
      typeof error === 'string' && dispatch(openToast({message: error, type: ToastEnum.ERROR}));
    }
  };

  const handleSignInFormSubmit = async (signInForm: SignInSchemaType): Promise<void> => {
    try {
      await dispatch(loginUser(signInForm)).unwrap();
      const user = await dispatch(getUser()).unwrap();
      const userWishlist = user.wishlist.map((item: {product: Product; addedDate: string}) => ({
        ...item.product,
        addedDate: item.addedDate
      }));
      dispatch(setWishlist(userWishlist));
      closeDialogAndGetUser(SuccessToastMessages.LOGIN);
    } catch (error) {
      typeof error === 'string' && dispatch(openToast({message: error, type: ToastEnum.ERROR}));
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
