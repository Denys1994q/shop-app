import ProductCard from '@components/ProductCard/ProductCard';
import {Product} from '@/store/slices/products/products.model';
import {List, ListItem} from '@mui/material';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {selectProducts} from '@/store/slices/products/products.selectors';
import {useEffect} from 'react';
import {getAllProducts} from '@/store/slices/products/products.thunks';
import SecondaryTitle from '../typography/SecondaryTitle/SecondaryTitle';
import {useSearchParams} from 'react-router-dom';

const ProductsList = () => {
  console.log('ProductsList');
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const products = useAppSelector(selectProducts);

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    dispatch(getAllProducts(params));
  }, []);

  return (
    <>
      {products.length === 0 ? (
        <SecondaryTitle sx={{textAlign: 'center'}} text="Nothing found" />
      ) : (
        <List>
          {products.map((product: Product) => (
            <ListItem key={product._id} sx={{mb: 4}}>
              {<ProductCard product={product} />}
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default ProductsList;
