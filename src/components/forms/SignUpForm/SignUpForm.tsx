import {useForm} from 'react-hook-form';
import BasicTextField from '@/components/inputs/BasicTextField/BasicTextField';

interface FormData {
  firstName: string;
  lastName: string;
}

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: {errors}
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <BasicTextField name={'textInput'} control={control} label={'Text Input'} rules={{required: true}} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpForm;
