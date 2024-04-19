import './Header.sass';
import NavMenu from '@/components/NavMenu/NavMenu';
import SubHeader from '../SubHeader/SubHeader';
import {Link} from 'react-router-dom';

const links = [
  {to: '#', title: 'Blog'},
  {to: '#', title: 'About us'},
  {to: '#', title: 'Careers'}
];

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="headerList">
        <div className="headerList__info">
          <p className="chat-with-us">Chat with us</p>
          <Link to="tel:+420336775664">+420 336 775 664</Link>
          <Link to="mailto:info@freshnescom.com">info@freshnescom.com</Link>
        </div>
        <NavMenu items={links} />
      </div>
      <SubHeader />
    </header>
  );
};

export default Header;
