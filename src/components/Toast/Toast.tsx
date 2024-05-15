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

const getBackgroundByToastType = (type: ToastEnum): string => {
  switch (type) {
    case ToastEnum.ERROR:
      return '#ba000d';
    case ToastEnum.SUCCESS:
      return '#6A983C';
    case ToastEnum.WARNING:
      return '#ed6c02';
    default:
      return '#0288d1';
  }
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
          background: toast?.type && getBackgroundByToastType(toast?.type)
        }
      }}
    />
  );
};

export default Toast;
