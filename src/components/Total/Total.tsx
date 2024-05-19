import './Total.sass';

interface TotalProps {
  value: number;
  label?: string;
}

const Total = ({value, label}: TotalProps) => {
  return (
    <span>
      <span className="total-number">{value}</span>
      {label && <span className="total-text">{label}</span>}
    </span>
  );
};

export default Total;
