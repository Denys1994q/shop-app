import {ReactNode} from 'react';
import Dialog from '@mui/material/Dialog';
import {DialogContent} from '@mui/material';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {openModal} from '@/store/slices/dialog/dialog.slice';

interface BasicDialogProps {
  children?: ReactNode;
}

const BasicDialog: React.FC<BasicDialogProps> = ({children}) => {
  const dispatch = useAppDispatch();
  const isOpenDialog = useAppSelector((store) => store.dialogSlice.isOpen);
  const dialogContent = useAppSelector((store) => store.dialogSlice.dialogContent);

  const handleClose = (): void => {
    dispatch(openModal(false));
  };

  return (
    <Dialog onClose={handleClose} open={isOpenDialog}>
      <DialogContent>{dialogContent}</DialogContent>
      {children && children}
    </Dialog>
  );
};

export default BasicDialog;
