import './App.sass';
import {Outlet} from 'react-router-dom';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import {FC, useEffect} from 'react';
import {useAppDispatch} from '@/store/hooks';
import {getUser} from '@/store/slices/auth/auth.thunks';
import Spinner from '@/components/Spinner/Spinner';
import BasicBackDrop from '@/components/BasicBackDrop/BasicBackDrop';
import useAxiosInterceptor from './hooks/useAxiosInterceptor';
import {useAppSelector} from '@/store/hooks';
import {Box} from '@mui/material';

const App: FC = () => {
  useAxiosInterceptor();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((store) => store.loadingSlice.isLoading);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <>
      <div className="main-container">
        <Header />
        <div className="content-container">
          <Outlet />
        </div>
        <Footer />
      </div>
      <BasicBackDrop isOpen={isLoading}>
        <Box sx={{width: '100%', position: 'absolute', top: '2px'}}>
          <Spinner />
        </Box>
      </BasicBackDrop>
    </>
  );
};

export default App;
