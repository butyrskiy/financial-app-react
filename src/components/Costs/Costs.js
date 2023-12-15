import Card from "../UI/Card";
import CostItem from "./CostItem";
import CostsFilter from "./CostsFilter";
import './Costs.css'
import { useState } from "react";

const Costs = (props) => {
  const { costs } = props;

  const [selectedYear, setSelectedYear] = useState('2023');

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  }

  return (
    <div>
      <Card className='costs'>
        <CostsFilter year ={selectedYear} onChangeYear={yearChangeHandler} />
        <CostItem date={costs[0].date} description={costs[0].description} amount={costs[0].amount} />
        <CostItem date={costs[1].date} description={costs[1].description} amount={costs[1].amount} />
        <CostItem date={costs[2].date} description={costs[2].description} amount={costs[2].amount} />
      </Card>
    </div>
  )
}

export default Costs;