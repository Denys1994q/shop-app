import './SubHeader.sass';
import logo from '@/assets/logo.svg';
import AuthPanel from '@/components/btns/AuthBtn/AuthBtn';
import CartBtn from '@components/btns/CartBtn/CartBtn';
import {Link} from 'react-router-dom';
import {routes} from '@/constants/routes';
import BasicBreadcrumbs from '../BasicBreadcrumbs/BasicBreadcrumbs';
import {Box, IconButton} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useAppSelector} from '@/store/hooks';
import {selectUser} from '@/store/slices/auth/auth.selectors';

const SubHeader: React.FC = () => {
  const user = useAppSelector(selectUser);

  return (
    <div className="subHeader">
      <div className="subHeader__authPanel">
        <Link to={routes.home}>
          <img src={logo} alt="logo" />
        </Link>
        <div className="subHeader__btns">
          {user && (
            <Link to={`/${routes.wishlist}`}>
              <IconButton>
                <FavoriteBorderIcon fontSize="large" />
              </IconButton>
            </Link>
          )}
          <AuthPanel />
          <CartBtn />
        </div>
      </div>
      <Box sx={{mt: 2}}>
        <BasicBreadcrumbs />
      </Box>
    </div>
  );
};

export default SubHeader;
