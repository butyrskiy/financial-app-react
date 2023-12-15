import { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2022, 11, 14),
    description: 'Refrigerator',
    amount: 1999.99
  },
  {
    id: 'c2',
    date: new Date(2023, 11, 23),
    description: 'MacBook Pro',
    amount: 1770.99
  },
  {
    id: 'c3',
    date: new Date(2022, 9, 21),
    description: 'Car',
    amount: 15000.00
  },
  {
    id: 'c4',
    date: new Date(2023, 10, 21),
    description: 'Phone',
    amount: 800.00
  },
  {
    id: 'c5',
    date: new Date(2023, 9, 21),
    description: 'Food',
    amount: 150.00
  },
  {
    id: 'c6',
    date: new Date(2023, 7, 21),
    description: 'Rent',
    amount: 500.00
  },
  {
    id: 'c7',
    date: new Date(2022, 6, 21),
    description: 'Cafe',
    amount: 1500.00
  },
  {
    id: 'c8',
    date: new Date(2022, 8, 21),
    description: 'Home',
    amount: 5500.00
  },
  {
    id: 'c9',
    date: new Date(2022, 10, 21),
    description: 'Rent',
    amount: 500.00
  },
  {
    id: 'c10',
    date: new Date(2022, 1, 21),
    description: 'Food',
    amount: 2500.00
  },
  {
    id: 'c11',
    date: new Date(2022, 2, 21),
    description: 'Rent',
    amount: 4500.00
  },
  {
    id: 'c12',
    date: new Date(2022, 3, 21),
    description: 'Music',
    amount: 1500.00
  },
  {
    id: 'c13',
    date: new Date(2022, 4, 21),
    description: 'Phone',
    amount: 500.00
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
