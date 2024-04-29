import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import {Link as RouterLink} from 'react-router-dom';
import {routes} from '@/constants/routes';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
}

const BasicBreadcrumbs = () => {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link component={RouterLink} underline="hover" color="inherit" to={`${routes.home}`}>
          HomePage
        </Link>
        <Typography color="text.primary">All Products</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default BasicBreadcrumbs;
