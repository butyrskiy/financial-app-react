import { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2022, 11, 14),
    description: 'Refrigerator',
    amount: 999.99
  },
  {
    id: 'c2',
    date: new Date(2023, 10, 23),
    description: 'MacBook Pro',
    amount: 1770.99
  },
  {
    id: 'c3',
    date: new Date(2022, 9, 21),
    description: 'Car',
    amount: 117000.00
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts];
    });
  }

  return (
    <>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </>
  );
}

export default App;
