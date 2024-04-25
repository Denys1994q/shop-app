import './FormHeader.sass';
import {FC} from 'react';
import {Box, Typography} from '@mui/material';
import CloseBtn from '@/components/btns/CloseBtn/CloseBtn';

interface FormHeaderProps {
  title: string;
  onCloseBtnClick: () => void;
}

const FormHeader: FC<FormHeaderProps> = ({title, onCloseBtnClick}) => {
  return (
    <>
      <Box className="form-close">
        <CloseBtn onClick={onCloseBtnClick} />
      </Box>
      <Typography className="form-title" fontSize={20} sx={{mb: 2}}>
        {title}
      </Typography>
    </>
  );
};

export default FormHeader;
