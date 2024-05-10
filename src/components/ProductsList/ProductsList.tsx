import ProductCard from '@components/ProductCard/ProductCard';
import {Product} from '@/store/slices/products/products.model';
import {List, ListItem} from '@mui/material';
import { useAppSelector } from '@/store/hooks';
import { selectProducts } from '@/store/slices/products/products.selectors';

interface ProductsListProps {
  // products: Product[];
}

const ProductsList = () => {

  const products = useAppSelector(selectProducts);

  return (
    <List>
      {products.map((product: Product) => (
        <ListItem key={product._id} sx={{mb: 4}}>
          {<ProductCard product={product} />}
        </ListItem>
      ))}
    </List>
  );
};

export default ProductsList;
