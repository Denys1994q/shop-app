import {ListItem, Typography, List, Box} from '@mui/material';
import {capitalizeFirstLetter} from '@/services/capitalizeFirstLetter';

interface CardInfoListProps {
  list: {label: string; value: string}[];
}

const boxStyles = {
  display: 'flex',
  justifyContent: 'flex-start',
  mb: 1,
  gap: 3,
  width: '100%'
};

const listItemStyles = {
  flexDirection: 'column',
  padding: 0,
  color: '#a9a9a9'
};

const CardInfoList = ({list}: CardInfoListProps) => {
  return (
    <List>
      {list.map(({label, value}) => (
        <ListItem sx={listItemStyles} key={value}>
          <Box sx={boxStyles}>
            <Typography variant="body1">{label}</Typography>
            <Typography variant="body1" sx={{color: '#6A983C'}}>
              {capitalizeFirstLetter(value)}
            </Typography>
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

export default CardInfoList;
