import {CardContent as MuiCardContent} from '@mui/material';
import SecondaryTitle from '@components/typography/SecondaryTitle/SecondaryTitle';
import MainParagraph from '@components/typography/MainParagraph/MainParagraph';
import BasicRating from '@/components/BasicRating/BasicRating';
import {ReactNode} from 'react';
import {Box} from '@mui/material';
import CardInfoList from '../CardInfoList/CardInfoList';
import {SellerEnum, StateEnum} from '@/models/product.enum';

const StyledBox = ({children}: {children: ReactNode}) => {
  return <Box sx={{mb: 1}}>{children}</Box>;
};

interface CardContentProps {
  title: string;
  description: string;
  rating: number;
  state: StateEnum;
  seller: SellerEnum;
}

const CardContent = ({title, description, rating, state, seller}: CardContentProps) => {
  const list = [
    {label: 'State', value: StateEnum[state]},
    {label: 'Seller', value: SellerEnum[seller]}
  ];

  return (
    <MuiCardContent sx={{padding: 0}}>
      <StyledBox>
        <SecondaryTitle text={title} />
      </StyledBox>
      <StyledBox>
        <MainParagraph text={description} />
      </StyledBox>
      <StyledBox>
        <BasicRating rating={rating} />
      </StyledBox>
      <StyledBox>
        <CardInfoList list={list} />
      </StyledBox>
    </MuiCardContent>
  );
};

export default CardContent;
