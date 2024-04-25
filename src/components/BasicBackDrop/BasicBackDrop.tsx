import {FC, ReactNode} from 'react';
import Backdrop from '@mui/material/Backdrop';

interface BasicBackDropProps {
  isOpen: boolean;
  children: ReactNode;
}

const backdropStyles = {
  color: '#fff',
  zIndex: (theme: {zIndex: {drawer: number}}) => theme.zIndex.drawer + 1,
  backgroundColor: 'rgba(0, 0, 0, 0.1)'
};

const BasicBackDrop: FC<BasicBackDropProps> = ({children, isOpen}) => {
  return (
    <div>
      <Backdrop sx={backdropStyles} open={isOpen}>
        {children}
      </Backdrop>
    </div>
  );
};

export default BasicBackDrop;
