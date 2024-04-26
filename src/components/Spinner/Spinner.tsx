import LinearProgress from '@mui/material/LinearProgress';
import BasicBackDrop from '../BasicBackDrop/BasicBackDrop';
import {useAppSelector} from '@/store/hooks';
import {Box} from '@mui/material';

const Spinner = () => {
  const isLoading = useAppSelector((store) => store.loadingSlice.isLoading);

  return (
    <BasicBackDrop isOpen={isLoading}>
      <Box sx={{width: '100%', position: 'absolute', top: '2px'}}>
        <LinearProgress color="success" />
      </Box>
    </BasicBackDrop>
  );
};

export default Spinner;
