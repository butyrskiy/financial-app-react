import CostItem from "./CostItem";
import "./CostList.css";

const CostsList = (props) => {
  if (props.costs.length === 0) {
    return <h2 className="cost-list__fallback">No costs in select year</h2>;
  }

  return (
    <ul className="cost-list">
      {props.costs.map((cost) => (
        <CostItem
          id={cost.id}
          key={cost.id}
          description={cost.description}
          amount={cost.amount}
          date={cost.date}
        />
      ))}
    </ul>
  );
};

export default CostsList;
