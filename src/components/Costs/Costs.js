import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import "./Costs.css";
import { useState } from "react";
import CostsList from "./CostList";
import CostsDiagram from "./CostsDiagram";

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
        <CostsDiagram costs={filteredCosts} />
        <CostsList costs={filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;
