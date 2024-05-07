import {useIsOpenToast, useToast} from '@/store/slices/toast/toast.actions';
import Snackbar from '@mui/material/Snackbar';
import CloseBtn from '@components/btns/CloseBtn/CloseBtn';
import {ToastEnum} from '@/models/toast.enum';
import {useAppDispatch} from '@store/hooks';
import {closeToast} from '@store/slices/toast/toast.slice';

const styles = {
  fontSize: 14,
  minWidth: 'auto'
};

const Toast = () => {
  const dispatch = useAppDispatch();
  const isOpen = useIsOpenToast();
  const toast = useToast();

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(closeToast());
  };

  const action = <CloseBtn sx={{color: '#fff'}} onClick={() => dispatch(closeToast())} />;

  let background = '';
  if (toast?.type === ToastEnum.ERROR) {
    background = '#ba000d';
  } else if (toast?.type === ToastEnum.SUCCESS) {
    background = '#6A983C';
  } else if (toast?.type === ToastEnum.WARNING) {
    background = '#ed6c02';
  } else {
    background = '#0288d1';
  }

  return (
    <Snackbar
      open={isOpen}
      message={toast?.message}
      autoHideDuration={toast?.autoHideDuration || 5000}
      onClose={handleClose}
      action={action}
      sx={{
        '& .MuiSnackbarContent-root': {
          ...styles,
          background: background
        }
      }}
    />
  );
};

export default Toast;
