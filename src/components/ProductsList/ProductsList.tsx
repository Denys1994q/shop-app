import ProductCard from '@components/ProductCard/ProductCard';
import {Product} from '@/store/slices/products/products.model';
import {Box, List, ListItem} from '@mui/material';
import {useAppDispatch, useAppSelector} from '@/store/hooks';
import {selectProducts} from '@/store/slices/products/products.selectors';
import {useEffect} from 'react';
import {getAllProducts} from '@/store/slices/products/products.thunks';
import {useSearchParams} from 'react-router-dom';
import {selectIsLoading} from '@/store/slices/loading/loading.selectors';
import ProductCardSkeleton from '../ProductCardSkeleton/ProductCardSkeleton';
import {useSelectWishlistLoading} from '@/store/slices/wishlist/wishlist.actions';

const ProductsList = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const [searchParams] = useSearchParams();
  const isLoading = useAppSelector(selectIsLoading);
  const isOpenDialog = useAppSelector((state) => state.dialogSlice.isOpen);
  const isWishlistLoading = useSelectWishlistLoading();

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    dispatch(getAllProducts(params));
  }, []);

  const content =
    products.length === 0 ? (
      <Box sx={{margin: '0 auto', width: 450}}>
        <img
          src="https://cdn.dribbble.com/userupload/2905341/file/original-e40e0ef8b2d32a9aaf5fcf21679966b4.png?resize=752x"
          alt=""
        />
      </Box>
    ) : (
      <List>
        {products.map((product: Product) => (
          <ListItem key={product._id} sx={{mb: 4}}>
            {<ProductCard product={product} />}
          </ListItem>
        ))}
      </List>
    );

  return isLoading && !isOpenDialog && !isWishlistLoading ? products.map(() => <ProductCardSkeleton />) : content;
};

export default ProductsList;
