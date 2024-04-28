import './App.sass';
import {Outlet} from 'react-router-dom';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import {useEffect} from 'react';
import {useAppDispatch} from '@/store/hooks';
import {getUser} from '@/store/slices/auth/auth.thunks';
import useAxiosInterceptor from './hooks/useAxiosInterceptor';
import Spinner from './components/Spinner/Spinner';
import BasicDialog from './components/BasicDialog/BasicDialog';

const App = () => {
  useAxiosInterceptor();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div className="main-container">
      <Header />
      <div className="content-container">
        <Outlet />
      </div>
      <Footer />
      <BasicDialog />
      <Spinner />
    </div>
  );
};

export default App;
