import Costs from "./components/Costs/Costs";

const App = () => {
  const costs = [
    {
      date: new Date(2023, 11, 14),
      description: 'Refrigerator',
      amount: 999.99
    },
    {
      date: new Date(2023, 10, 23),
      description: 'MacBook Pro',
      amount: 1770.99
    },
    {
      date: new Date(2023, 9, 21),
      description: 'Car',
      amount: 117000.00
    },
  ];

  return (
    <>
      <h1>Start learning React!</h1>
      <Costs costs={costs} />
    </>
  );
}

export default App;
