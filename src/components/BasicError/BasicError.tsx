import './BasicError.sass';

interface BasicErrorProps {
  text: string;
}

const BasicError = ({text}: BasicErrorProps) => {
  return <p className="error-message">{text}</p>;
};

export default BasicError;
