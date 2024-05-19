import './ProductDetailsPage.sass';
import MainTitle from '@components/typography/MainTitle/MainTitle';
import BasicRating from '@components/BasicRating/BasicRating';
import MainParagraph from '@components/typography/MainParagraph/MainParagraph';
import {longParagraphLength} from '@constants/typography.constant';
import CardInfoList from '@components/ProductCard/CardInfoList/CardInfoList';
import {PropsWithChildren, ReactNode} from 'react';
import {Box} from '@mui/material';
import WishListBtn from '@components/btns/WishlistBtn/WishlistBtn';
import ProductAddToCart from '@/components/ProductAddToCart/ProductAddToCart';
import PhotosGrid from '@/components/PhotosGrid/PhotosGrid';

const StyledBox = ({children}: {children: PropsWithChildren<ReactNode>}) => {
  return <Box sx={{mb: 5}}>{children}</Box>;
};

const ProductDetailsPage = () => {
  return (
    <section className="product">
      <div className="product__photos">
        <PhotosGrid />
      </div>
      <div className="product__info">
        <MainTitle text="Carrots from Tomissy Farm" sx={{marginBottom: 2}} />
        <StyledBox>
          <BasicRating rating={4} />
        </StyledBox>
        <StyledBox>
          <MainParagraph
            maxLength={longParagraphLength}
            sx={{fontSize: 17}}
            text="Carrots from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. To misso’s carrots are growing on the fields naturally."
          />
        </StyledBox>
        <StyledBox>
          <CardInfoList
            list={[
              {label: 'State', value: 'New'},
              {label: 'Seller', value: 'Rozetka'}
            ]}
          />
        </StyledBox>
        <Box sx={{marginBottom: 3}}>
          <ProductAddToCart />
        </Box>
        <WishListBtn />
      </div>
    </section>
  );
};

export default ProductDetailsPage;
