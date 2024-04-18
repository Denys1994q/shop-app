import './SubHeader.sass';
import logo from '@/assets/logo.svg';
import AuthBtn from '@/components/btns/AuthBtn/AuthBtn';
import CartBtn from '@components/btns/CartBtn/CartBtn';

const SubHeader: React.FC = () => {
  return (
    <div className="subHeader">
      <div className="subHeader__authPanel">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        <div className="subHeader__btns">
          <AuthBtn isAuthed />
          <CartBtn />
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
