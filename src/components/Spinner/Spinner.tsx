import LinearProgress from '@mui/material/LinearProgress';
import BasicBackDrop from '../BasicBackDrop/BasicBackDrop';
import {useAppSelector} from '@/store/hooks';
import {Box} from '@mui/material';
import {selectIsLoading} from '@/store/slices/loading/loading.selectors';

const Spinner = () => {
  const isLoading = useAppSelector(selectIsLoading);

  return (
    <BasicBackDrop isOpen={isLoading}>
      <Box sx={{width: '100%', position: 'absolute', top: '2px'}}>
        <LinearProgress color="success" />
      </Box>
    </BasicBackDrop>
  );
};

export default Spinner;
