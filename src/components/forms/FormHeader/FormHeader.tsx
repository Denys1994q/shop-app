import './FormHeader.sass';
import {FC} from 'react';
import {Box, Typography} from '@mui/material';
import CloseBtn from '@/components/btns/CloseBtn/CloseBtn';
import {useAppDispatch} from '@/store/hooks';
import {closeDialog} from '@/store/slices/dialog/dialog.slice';

interface FormHeaderProps {
  title: string;
}

const FormHeader: FC<FormHeaderProps> = ({title}) => {
  const dispatch = useAppDispatch();

  const closeFormModal = (): void => {
    dispatch(closeDialog());
  };

  return (
    <>
      <Box className="form-close">
        <CloseBtn onClick={closeFormModal} />
      </Box>
      <Typography className="form-title" fontSize={20} sx={{mb: 2}}>
        {title}
      </Typography>
    </>
  );
};

export default FormHeader;
