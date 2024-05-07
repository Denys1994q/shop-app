import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface CloseBtnProps {
  onClick: () => void;
  sx?: React.CSSProperties;
}

const CloseBtn = ({onClick, sx}: CloseBtnProps) => {
  return (
    <IconButton aria-label="close-icon" onClick={onClick} sx={{...sx}}>
      <CloseIcon />
    </IconButton>
  );
};

export default CloseBtn;
