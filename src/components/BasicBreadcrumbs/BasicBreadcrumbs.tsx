import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {Link, useLocation, useParams} from 'react-router-dom';
import {selectProducts} from '@/store/slices/products/products.selectors';
import {useAppSelector} from '@/store/hooks';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {
  const location = useLocation();
  const {id} = useParams();
  const products = useAppSelector(selectProducts);

  console.log(location);
  const prod = products.find((product) => product._id === id)?.title;

  return (
    <div role="presentation" onClick={handleClick}>
      {location.pathname.includes('products') ? (
        <Breadcrumbs aria-label="breadcrumb">
          <Link to={'/'}>Homepage</Link>
          <Typography color="text.primary">All Products</Typography>
          <Typography color="text.primary">{prod}</Typography>
        </Breadcrumbs>
      ) : (
        <Breadcrumbs aria-label="breadcrumb">
          <Link to={'/'}>Homepage</Link>
          <Typography color="text.primary">All Products</Typography>
        </Breadcrumbs>
      )}
    </div>
  );
}
