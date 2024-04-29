import './SubHeader.sass';
import logo from '@/assets/logo.svg';
import AuthPanel from '@components/AuthPanel/AuthPanel';
import CartBtn from '@components/btns/CartBtn/CartBtn';
import {Link} from 'react-router-dom';
import {routes} from '@/constants/routes';
import BasicBreadcrumbs from '@components/BasicBreadcrumbs/BasicBreadcrumbs';

const SubHeader: React.FC = () => {
  return (
    <div className="subHeader">
      <div className="subHeader__authPanel">
        <Link to={routes.home}>
          <img src={logo} alt="logo" />
        </Link>
        <div className="subHeader__btns">
          <AuthPanel />
          <CartBtn />
        </div>
      </div>
      <BasicBreadcrumbs />
    </div>
  );
};

export default SubHeader;
