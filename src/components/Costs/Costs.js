import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import "./Costs.css";
import { useState } from "react";
import CostsList from "./CostList";

const Costs = (props) => {
  const { costs } = props;

  const [selectedYear, setSelectedYear] = useState("2023");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = costs.filter(cost => cost.date.getFullYear().toString() === selectedYear);

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostsList costs={filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;
