import './NavMenu.sass';
import {Link} from 'react-router-dom';

interface NavMenuProps {
  items: {to: string; title: string}[];
}

const NavMenu: React.FC<NavMenuProps> = ({items}) => {
  return (
    <nav>
      <ul className="nav-list">
        {items.map((item) => (
          <li key={item.title}>
            <Link to={item.to}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
