import Dialog from '@mui/material/Dialog';
import {DialogContent} from '@mui/material';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {openModal} from '@/store/slices/dialog/dialog.slice';

const BasicDialog = () => {
  const dispatch = useAppDispatch();
  const isOpenDialog = useAppSelector((store) => store.dialogSlice.isOpen);
  const dialogContent = useAppSelector((store) => store.dialogSlice.dialogContent);

  const handleClose = (): void => {
    dispatch(openModal(false));
  };

  return (
    <Dialog onClose={handleClose} open={isOpenDialog}>
      <DialogContent>{dialogContent}</DialogContent>
    </Dialog>
  );
};

export default BasicDialog;
