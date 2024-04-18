import './Header.sass';
import NavMenu from '@/components/NavMenu/NavMenu';
import SubHeader from '../SubHeader/SubHeader';

const Header: React.FC = () => {
  const links = [
    {link: '#', title: 'Blog'},
    {link: '#', title: 'About us'},
    {link: '#', title: 'Careers'}
  ];

  return (
    <header className="header">
      <div className="headerList">
        <div className="headerList__info">
          <p className="chat-with-us">Chat with us</p>
          <a href="tel:+420336775664">+420 336 775 664</a>
          <a href="mailto:info@freshnescom.com">info@freshnescom.com</a>
        </div>
        <NavMenu items={links} />
      </div>
      <SubHeader />
    </header>
  );
};

export default Header;
