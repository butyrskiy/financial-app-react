import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const App = () => {
  const costs = [
    {
      id: 'c1',
      date: new Date(2023, 11, 14),
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
      date: new Date(2023, 9, 21),
      description: 'Car',
      amount: 117000.00
    },
  ];

  const addCostHandler = (cost) => {
    console.log(cost);
  }

  return (
    <>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </>
  );
}

export default App;
