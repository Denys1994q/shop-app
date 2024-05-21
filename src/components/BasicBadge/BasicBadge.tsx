import Badge from '@mui/material/Badge';
import {ReactNode} from 'react';

interface BasicBadgeProps {
  badgeContent: ReactNode;
  children: React.ReactNode;
  color?: 'default' | 'error' | 'primary' | 'secondary' | undefined;
}

const BasicBadge = ({badgeContent, children, color = 'default'}: BasicBadgeProps) => {
  return (
    <Badge
      showZero
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      sx={{
        '.MuiBadge-badge': {
          fontSize: '12px',
            transform: 'scale(1) translate(30px, 0%)',
          background: '#F4F8EC',
          color: '#6A983C',
          fontWeight: 'bold'
        }
      }}
      badgeContent={badgeContent}
      color={color}
    >
      {children}
    </Badge>
  );
};

export default BasicBadge;
