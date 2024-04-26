import './App.sass';
import {Outlet} from 'react-router-dom';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import {useEffect} from 'react';
import {useAppDispatch} from '@/store/hooks';
import {getUser} from '@/store/slices/auth/auth.thunks';
import BasicDialog from './components/BasicDialog/BasicDialog';

const App = () => {
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
    </div>
  );
};

export default App;
