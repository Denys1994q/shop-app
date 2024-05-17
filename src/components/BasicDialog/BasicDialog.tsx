import Dialog from '@mui/material/Dialog';
import {DialogContent} from '@mui/material';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {closeDialog} from '@/store/slices/dialog/dialog.slice';
import CloseBtn from '../btns/CloseBtn/CloseBtn';

const BasicDialog = () => {
  const dispatch = useAppDispatch();
  const isOpenDialog = useAppSelector((store) => store.dialogSlice.isOpen);
  const dialogContent = useAppSelector((store) => store.dialogSlice.dialogContent);

  const handleClose = (): void => {
    dispatch(closeDialog());
  };

  return (
    <Dialog onClose={handleClose} open={isOpenDialog}>
      <DialogContent>
        <CloseBtn onClick={handleClose} sx={{position: 'absolute', right: '10px', top: '10px'}} />
        {dialogContent}
      </DialogContent>
    </Dialog>
  );
};

export default BasicDialog;
