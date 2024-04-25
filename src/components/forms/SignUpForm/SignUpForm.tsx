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
import FormHeader from '../FormHeader/FormHeader';
import Grid from '@mui/material/Grid';
import {useAppDispatch} from '@/store/hooks';
import {openModal} from '@/store/slices/dialog/dialog.slice';

const fields: FormField[] = [
  {name: 'firstName', label: 'First name', required: true},
  {name: 'lastName', label: 'Last name', required: true},
  {name: 'email', label: 'Email', required: true},
  {name: 'phoneNumber', label: 'Phone number'},
  {name: 'password', label: 'Password', fieldType: FieldType.PASSWORD, required: true},
  {name: 'confirmPassword', label: 'Confirm password', fieldType: FieldType.PASSWORD, required: true}
];

interface SignUpFormProps {
  onFormSubmit: (data: SignUpSchemaType) => void;
  error?: string | null;
}

const SignUpForm: FC<SignUpFormProps> = ({onFormSubmit, error}) => {
  const dispatch = useAppDispatch();
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

  const handleCloseBtnClick = (): void => {
    dispatch(openModal(false));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormHeader title={'Sign Up'} onCloseBtnClick={handleCloseBtnClick} />
      <Grid container spacing={2} sx={{mb: 4}}>
        {fields.map((field) => (
          <Grid item xs={6} key={field.name}>
            <BasicTextField
              type={field.fieldType}
              required={field.required}
              name={SignUpFields[field.name.toUpperCase() as keyof typeof SignUpFields]}
              control={control}
              label={field.label}
              className="signUpForm__input"
            />
          </Grid>
        ))}
      </Grid>
      <BasicBtn type="submit" text="Register" />
    </form>
  );
};

export default SignUpForm;
