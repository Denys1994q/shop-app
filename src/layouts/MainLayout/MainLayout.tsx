import './MainLayout.sass';
import {Outlet} from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div className="main-container">
      <Outlet />
    </div>
  );
};

export default MainLayout;
