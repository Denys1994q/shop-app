import './ProductDetailsPage.sass';
import {useEffect, useState} from 'react';
import MainTitle from '@components/typography/MainTitle/MainTitle';
import BasicRating from '@components/BasicRating/BasicRating';
import MainParagraph from '@components/typography/MainParagraph/MainParagraph';
import CardInfoList from '@components/ProductCard/CardInfoList/CardInfoList';
import {PropsWithChildren, ReactNode} from 'react';
import {Box} from '@mui/material';
import WishListBtn from '@components/btns/WishlistBtn/WishlistBtn';
import ProductAddToCart from '@components/ProductAddToCart/ProductAddToCart';
import PhotosGrid from '@components/PhotosGrid/PhotosGrid';
import {useParams} from 'react-router-dom';
import {useAppDispatch} from '@store/hooks';
import {getOneProduct} from '@store/slices/products/products.thunks';
import {openToast} from '@store/slices/toast/toast.slice';
import {ToastEnum} from '@/models/toast.enum';
import {Product} from '@store/slices/products/products.model';
import BasicTabs from '@/components/BasicTabs/BasicTabs';

const StyledBox = ({children}: {children: PropsWithChildren<ReactNode>}) => {
  return <Box sx={{mb: 5}}>{children}</Box>;
};

// скелетон додати
const ProductDetailsPage = () => {
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<Product | null>(null);
  const {id} = useParams();

  const getProduct = async () => {
    try {
      if (id) {
        const product = await dispatch(getOneProduct(id)).unwrap();
        setProduct(product);
      }
    } catch (error) {
      dispatch(openToast({message: error as string, type: ToastEnum.ERROR}));
    }
  };

  useEffect(() => {
    getProduct();
    scrollTo({top: 0, behavior: 'smooth'});
  }, []);

  const priceAfterDiscount =
    product && product.discount ? product.price - (product.price * product.discount) / 100 : product?.price;

  return (
    product && (
      <section className="product">
        <div className="product__photos">
          <PhotosGrid />
        </div>
        <div className="product__info">
          <MainTitle text={product.title} sx={{marginBottom: 2}} />
          <StyledBox>
            <>{product.rating && <BasicRating rating={product.rating} />}</>
          </StyledBox>
          <StyledBox>
            <MainParagraph sx={{fontSize: 17}} lineClamp={5} text={product.description} />
          </StyledBox>
          <StyledBox>
            <Box sx={{display: 'flex', justifyContent: 'space-between', fontSize: 14}}>
              <div>
                <Box sx={{display: 'flex', gap: '40px', marginBottom: '12px'}}>
                  <p style={{width: '70px', color: '#A9A9A9'}}>Seller:</p>
                  <p>{product.seller}</p>
                </Box>
                <Box sx={{display: 'flex', gap: '40px', marginBottom: '12px'}}>
                  <p style={{width: '70px', color: '#A9A9A9'}}>State:</p>
                  <p>New</p>
                </Box>
                <Box sx={{display: 'flex', gap: '40px'}}>
                  <p style={{width: '70px', color: '#A9A9A9'}}>Country:</p>
                  <p>USA</p>
                </Box>
              </div>
              <div>
                <div>
                  <Box sx={{display: 'flex', gap: '40px', marginBottom: '12px'}}>
                    <p style={{width: '70px', color: '#A9A9A9'}}>Series:</p>
                    <p>Galaxy</p>
                  </Box>
                  <Box sx={{display: 'flex', gap: '40px', marginBottom: '12px'}}>
                    <p style={{width: '70px', color: '#A9A9A9'}}>Screen:</p>
                    <p>6.5</p>
                  </Box>
                  <Box sx={{display: 'flex', gap: '40px'}}>
                    <p style={{width: '70px', color: '#A9A9A9'}}>SIM:</p>
                    <p>2</p>
                  </Box>
                </div>
              </div>
            </Box>
            {/* <CardInfoList
              list={[
                {label: 'State', value: 'New'},
                {label: 'Seller', value: 'Rozetka'},
                {label: 'State', value: 'New'},
                {label: 'Seller', value: 'Rozetka'},
                {label: 'State', value: 'New'},
                {label: 'Seller', value: 'Rozetka'}
              ]}
            /> */}
          </StyledBox>
          <Box sx={{marginBottom: 3}}>
            <ProductAddToCart priceBeforeDiscount={product.price} priceAfterDiscount={priceAfterDiscount} />
          </Box>
          <WishListBtn />
          <Box mt={7}>
            <BasicTabs description={product.detailedDescription} />
          </Box>
        </div>
      </section>
    )
  );
};

export default ProductDetailsPage;
