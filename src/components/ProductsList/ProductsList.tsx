import ProductCard from '@components/ProductCard/ProductCard';
import {Product} from '@/store/slices/products/products.model';
import {List, ListItem} from '@mui/material';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {selectProducts} from '@/store/slices/products/products.selectors';
import SecondaryTitle from '../typography/SecondaryTitle/SecondaryTitle';
import {useEffect} from 'react';
import {getAllProducts} from '@/store/slices/products/products.thunks';
import {useSearchParams} from 'react-router-dom';

const ProductsList = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    dispatch(getAllProducts(params));
    // якщо є юрл, то з ними
    // якщо нема, то просто
  }, []);

  return (
    <>
      {products.length === 0 ? (
        <>
          <img
            src="https://cdn.dribbble.com/userupload/2905341/file/original-e40e0ef8b2d32a9aaf5fcf21679966b4.png?resize=752x"
            alt=""
          />
          <SecondaryTitle sx={{textAlign: 'center'}} text="Nothing found" />
        </>
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
