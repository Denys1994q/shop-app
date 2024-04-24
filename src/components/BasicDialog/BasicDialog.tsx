import {ReactNode} from 'react';
import Dialog from '@mui/material/Dialog';
import {DialogContent} from '@mui/material';

interface BasicDialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const BasicDialog: React.FC<BasicDialogProps> = ({onClose, open, children}) => {
  const handleClose = (): void => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default BasicDialog;
