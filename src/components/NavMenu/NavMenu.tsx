import './NavMenu.sass';

interface NavMenuProps {
  items: {link: string; title: string}[];
}

const NavMenu: React.FC<NavMenuProps> = ({items}) => {
  return (
    <nav>
      <ul className="nav">
        {items.map((item) => (
          <li key={item.title}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
