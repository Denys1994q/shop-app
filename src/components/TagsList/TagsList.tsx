import {Box, Typography} from '@mui/material';
import Tag from '../Tag/Tag';

interface TagsListProps {
  title?: string;
  labels: string[];
}

const tagsBox = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  py: 1
};

const TagsList = ({title, labels}: TagsListProps) => {
  return (
    <>
      {title && (
        <Typography variant="h2" sx={{mb: 2, fontSize: 18, fontWeight: 'bold'}}>
          {title}
        </Typography>
      )}
      <Box sx={tagsBox}>
        {labels.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </Box>
    </>
  );
};

export default TagsList;
