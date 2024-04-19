import './MainLayout.sass';
import {Outlet} from 'react-router-dom';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const MainLayout: React.FC = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="content-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
