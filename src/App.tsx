import './App.sass';
import {Outlet} from 'react-router-dom';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import {useEffect} from 'react';
import {useAppDispatch} from '@/store/hooks';
import {getUser} from '@/store/slices/auth/auth.thunks';
import Spinner from '@components/Spinner/Spinner';
import BasicDialog from '@components/BasicDialog/BasicDialog';
import Toast from '@components/Toast/Toast';
import {setWishlist} from './store/slices/wishlist/wishlist.slice';
import {Product} from './store/slices/products/products.model';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getUserApi();
  }, []);

  const getUserApi = async () => {
    try {
      const user = await dispatch(getUser()).unwrap();
      const userWishlist = user.wishlist.map((item: {product: Product; addedDate: string}) => ({
        ...item.product,
        addedDate: item.addedDate
      }));
      dispatch(setWishlist(userWishlist));
    } catch (error) {}
  };

  return (
    <div className="main-container">
      <Header />
      <div className="content-container">
        <Outlet />
      </div>
      <Footer />
      <BasicDialog />
      <Toast />
      <Spinner />
    </div>
  );
};

export default App;
