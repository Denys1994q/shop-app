import './ProductDetailsPage.sass';
import MainTitle from '@components/typography/MainTitle/MainTitle';
import BasicRating from '@components/BasicRating/BasicRating';
import MainParagraph from '@components/typography/MainParagraph/MainParagraph';
import {longParagraphLength} from '@constants/typography.constant';
import CardInfoList from '@components/ProductCard/CardInfoList/CardInfoList';
import {PropsWithChildren} from 'react';
import {Box} from '@mui/material';
import WishListBtn from '@components/btns/WishlistBtn/WishlistBtn';
import ProductAddToCart from '@/components/ProductAddToCart/ProductAddToCart';
import PhotosGrid from '@/components/PhotosGrid/PhotosGrid';
import BasicTabs from '@/components/BasicTabs/BasicTabs';

const StyledBox = ({children}: PropsWithChildren) => {
  return <Box sx={{mb: 5}}>{children}</Box>;
};

const ProductDetailsPage = () => {
  const description =
    'Carrots from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. To misso’s carrots are growing on the fields naturally.';

  const tabs = [
    {
      label: 'Description',
      content: (
        <Box>
          <p>Description content.</p>
        </Box>
      )
    },
    {
      label: 'Reviews',
      content: (
        <Box>
          <p>No reviews yet.</p>
        </Box>
      )
    },
    {
      label: 'Questions',
      content: (
        <Box>
          <p>No questions yet.</p>
        </Box>
      )
    }
  ];

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
          <MainParagraph maxLength={longParagraphLength} sx={{fontSize: 17}} text={description} />
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
          <Box mt={7}>
            <BasicTabs tabs={tabs} />
          </Box>
        </Box>
        <WishListBtn />
      </div>
    </section>
  );
};

export default ProductDetailsPage;
