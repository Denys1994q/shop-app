import {FC} from 'react';
import './BasicError.sass';

interface BasicErrorProps {
  text: string;
}

const BasicError: FC<BasicErrorProps> = ({text}) => {
  return <p className="error-message">{text}</p>;
};

export default BasicError;
