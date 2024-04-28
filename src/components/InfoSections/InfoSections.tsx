import './InfoSections.sass';
import {infoSections} from '@/constants/infoSections.constant';
import {Link} from 'react-router-dom';

const InfoSections = () => {
  return (
    <ul className="info__list">
      {infoSections.map(({section, subSections}) => (
        <li key={section}>
          <h2 className="info__title">{section}</h2>
          <ul className="info__subList">
            {subSections.map(({name, href}) => (
              <li key={name} className="info__subtitle">
                <Link to={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default InfoSections;
