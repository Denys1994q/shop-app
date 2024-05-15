import {Box, Pagination, Typography} from '@mui/material';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number, event: React.ChangeEvent<unknown>) => void;
}

const BasicPagination = ({currentPage, totalPages, onChange}: PaginationProps) => {
  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number): void => {
    onChange(page, event);
  };

  return (
    <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
      <Typography sx={{color: '#A9A9A9', fontSize: 12}} component="span">
        Page:
      </Typography>
      <Pagination
        sx={{
          '& .MuiPaginationItem-root': {
            fontSize: 12,
            minWidth: '16px',
            height: 'auto',
            padding: '2px',
            '&:hover': {
              backgroundColor: '#6A983C',
              color: '#fff'
            }
          },
          '& .css-hdiora-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected': {
            backgroundColor: '#6A983C',
            color: '#fff'
          }
        }}
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        shape="rounded"
        hidePrevButton
        hideNextButton
      />
    </Box>
  );
};

export default BasicPagination;
