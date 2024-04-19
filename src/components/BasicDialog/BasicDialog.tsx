import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {DialogContent} from '@mui/material';

interface BasicDialogProps {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const BasicDialog: React.FC<BasicDialogProps> = ({title, onClose, open, children}) => {
  const handleClose = (): void => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle fontSize={20} sx={{textAlign: 'center'}}>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default BasicDialog;
