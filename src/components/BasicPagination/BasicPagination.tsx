import {Box, Pagination, Typography} from '@mui/material';
import './BasicPagination.sass';
import {useEffect, useRef} from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number, event: React.ChangeEvent<unknown>) => void;
  showMore?: number;
}

const BasicPagination = ({currentPage, totalPages, onChange, showMore}: PaginationProps) => {
  const paginationRef = useRef(null);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number): void => {
    onChange(page, event);
  };

  useEffect(() => {
    const limit = showMore / 5;

    const navElement = paginationRef.current;
    const ulElement = navElement && navElement.querySelector('ul');
    const listItems = ulElement.querySelectorAll('li');
    listItems.forEach((li: any, index: number) => {
      if (index + 1 >= currentPage && index + 1 < currentPage + limit) {
        li.classList.add('red-background');
      }
    });
  }, [showMore]);

  useEffect(() => {
    const navElement = paginationRef.current;
    const ulElement = navElement && navElement.querySelector('ul');
    const listItems = ulElement.querySelectorAll('li');
    listItems.forEach((li: any, index: number) => {
      li.classList.remove('red-background');
    });
  }, [currentPage]);

  return (
    <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
      <Typography sx={{color: '#A9A9A9', fontSize: 12}} component="span">
        Page:
      </Typography>
      <Pagination
        ref={paginationRef}
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
        className="kek"
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
