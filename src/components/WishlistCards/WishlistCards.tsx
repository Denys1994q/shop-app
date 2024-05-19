import {Product} from '@/store/slices/products/products.model';
import {useSelectWishlist, useSelectWishlistLoading} from '@/store/slices/wishlist/wishlist.actions';
import ProductCard from '../ProductCard/ProductCard';
import {Box, List, ListItem} from '@mui/material';
import ProductCardSkeleton from '../ProductCardSkeleton/ProductCardSkeleton';
import {useAppSelector} from '@store/hooks';
import {selectIsLoading} from '@store/slices/loading/loading.selectors';

const WishlistCards = () => {
  const isLoading = useAppSelector(selectIsLoading);
  const wishlist = useSelectWishlist();
  const isWishlistLoading = useSelectWishlistLoading();

  const content =
    wishlist.length === 0 ? (
      <Box sx={{margin: '0 auto', width: 450}}>
        <img
          src="https://cdn.dribbble.com/userupload/2905341/file/original-e40e0ef8b2d32a9aaf5fcf21679966b4.png?resize=752x"
          alt=""
        />
      </Box>
    ) : (
      <List>
        {wishlist.map((product: Product) => (
          <ListItem key={product._id} sx={{mb: 4}}>
            {<ProductCard product={product} />}
          </ListItem>
        ))}
      </List>
    );

  return isLoading && !isWishlistLoading ? wishlist.map(() => <ProductCardSkeleton />) : content;
};

export default WishlistCards;
