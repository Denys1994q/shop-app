import ProductCard from '@components/ProductCard/ProductCard';
import {Product} from '@/store/slices/products/products.model';
import {List, ListItem} from '@mui/material';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {selectProducts} from '@/store/slices/products/products.selectors';
import SecondaryTitle from '../typography/SecondaryTitle/SecondaryTitle';
import {useEffect} from 'react';
import {getAllProducts} from '@/store/slices/products/products.thunks';
import {useSearchParams} from 'react-router-dom';
import ProductCardSkeleton from '../ProductCardSkeleton/ProductCardSkeleton';
import {selectIsLoading} from '@/store/slices/loading/loading.selectors';
import {selectIsOpenDialog} from '@/store/slices/dialog/dialog.selectors';

const ProductsList = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const [searchParams] = useSearchParams();
  const isLoading = useAppSelector(selectIsLoading);
  const isOpenDialog = useAppSelector(selectIsOpenDialog);

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    dispatch(getAllProducts(params));
  }, []);

  const content = Boolean(products.length) ? (
    <List>
      {products.map((product: Product) => (
        <ListItem key={product._id} sx={{mb: 4}}>
          {<ProductCard product={product} />}{' '}
        </ListItem>
      ))}{' '}
    </List>
  ) : (
    <SecondaryTitle sx={{textAlign: 'center'}} text="Nothing found" />
  );

  return isLoading && !isOpenDialog ? products.map(() => <ProductCardSkeleton />) : content;
};

export default ProductsList;
