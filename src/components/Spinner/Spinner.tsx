import LinearProgress from '@mui/material/LinearProgress';
import {useAppSelector} from '@/store/hooks';
import {Backdrop, Box} from '@mui/material';
import {selectIsLoading} from '@/store/slices/loading/loading.selectors';

const Spinner = () => {
  const isLoading = useAppSelector(selectIsLoading);

  return (
    <Backdrop open={isLoading}>
      <Box sx={{width: '100%', position: 'absolute', top: '2px'}}>
        <LinearProgress color="success" />
      </Box>
    </Backdrop>
  );
};

export default Spinner;
