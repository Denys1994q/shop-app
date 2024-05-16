import {CardContent as MuiCardContent} from '@mui/material';
import SecondaryTitle from '@components/typography/SecondaryTitle/SecondaryTitle';
import MainParagraph from '@components/typography/MainParagraph/MainParagraph';
import BasicRating from '@/components/BasicRating/BasicRating';
import {Box} from '@mui/material';
import CardInfoList from '../CardInfoList/CardInfoList';
import {SellerEnum, StateEnum} from '@/models/product.enum';
import {PropsWithChildren} from 'react';
import {ReactNode} from 'react';

const StyledBox = ({children}: {children: PropsWithChildren<ReactNode>}) => {
  return <Box sx={{mb: 1}}>{children}</Box>;
};

interface CardContentProps {
  title: string;
  description: string;
  rating: number;
  state: StateEnum;
  seller: SellerEnum;
  country: any;
}

const CardContent = ({title, description, rating, state, seller, country}: CardContentProps) => {
  let list = [];
  if (state) list.push({label: 'State', value: StateEnum[state]});
  if (seller) list.push({label: 'Seller', value: SellerEnum[seller]});
  if (country) list.push({label: 'Country', value: country});

  return (
    <MuiCardContent
      sx={{
        padding: '0 !important',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '222px',
        '& .MuiCardContent-root:last-child': {padding: 0}
      }}
    >
      <Box>
        <StyledBox>
          <SecondaryTitle text={title} />
        </StyledBox>
        <StyledBox>
          <MainParagraph text={description} />
        </StyledBox>
        <StyledBox>
          <BasicRating rating={rating} />
        </StyledBox>
      </Box>
      <StyledBox>
        <CardInfoList list={list} />
      </StyledBox>
    </MuiCardContent>
  );
};

export default CardContent;
