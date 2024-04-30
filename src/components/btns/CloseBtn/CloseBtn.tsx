import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {FC} from 'react';

interface CloseBtnProps {
  onClick: () => void;
}

const CloseBtn: FC<CloseBtnProps> = ({onClick}) => {
  return (
    <IconButton aria-label="close-icon" onClick={onClick}>
      <CloseIcon />
    </IconButton>
  );
};

export default CloseBtn;
