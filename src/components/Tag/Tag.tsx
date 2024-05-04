import Chip from '@mui/material/Chip';

interface TagProps {
  text: string;
}

const chipStyles = {
  fontSize: 12,
  background: '#f5f5f5',
  border: 'none',
  fontWeight: 'bold'
};

const Tag = ({text}: TagProps) => {
  return <Chip key={text} label={text} variant="outlined" sx={chipStyles} />;
};

export default Tag;
