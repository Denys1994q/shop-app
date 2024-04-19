import './SubHeader.sass';
import logo from '@/assets/logo.svg';
import AuthBtn from '@/components/btns/AuthBtn/AuthBtn';
import CartBtn from '@components/btns/CartBtn/CartBtn';
import {Link} from 'react-router-dom';
import {routes} from '@/constants/routes';

const SubHeader: React.FC = () => {
  return (
    <div className="subHeader">
      <div className="subHeader__authPanel">
        <Link to={routes.home}>
          <img src={logo} alt="logo" />
        </Link>
        <div className="subHeader__btns">
          <AuthBtn isAuthenticated />
          <CartBtn />
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
