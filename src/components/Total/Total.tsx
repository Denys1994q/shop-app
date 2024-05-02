import './Total.sass';

interface TotalProps {
  value: number;
}

const Total = ({value}: TotalProps) => {
  return (
    <span>
      <span className="total-number">{value}</span>
      <span className="total-text">Products</span>
    </span>
  );
};

export default Total;
