export const formStyles = {
  box: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6
  },
  categories: {
    maxHeight: '400px',
    overflowY: 'auto'
  },
  ratingSlider: {
    '& .MuiSlider-thumb': {
      color: '#fff'
    },
    '& .MuiSlider-track': {
      color: '#ffc400'
    },
    '& .MuiSlider-rail': {
      backgroundColor: '#D1D1D1'
    }
  }
};
