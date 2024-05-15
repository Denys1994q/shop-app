import {ListItem, Typography, List, Box} from '@mui/material';
import {capitalizeFirstLetter} from '@/services/capitalizeFirstLetter';

interface CardInfoListProps {
  list: {label: string; value: string}[];
}

const styles = {
  box: {
    display: 'flex',
    justifyContent: 'flex-start',
    mb: 1,
    gap: 3,
    width: '100%'
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    gap: 2
  }
};

const CardInfoList = ({list}: CardInfoListProps) => {
  return (
    <List>
      {list.map(({label, value}) => (
        <ListItem sx={styles.box} key={value}>
          <Box sx={styles.listItem}>
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
