import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      itemNumber: 1,
      title: 'EXPENSE ONE',
      amount: 94.12,
      date: new Date(2020, 7, 14),
  
    },
    { itemNumber: 2, 
      title: 'EXPENSE TWO', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) 
    },
    {
      itemNumber: 3,
      title: 'EXPENSE THREE',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      itemNumber: 4,
      title: 'EXPENSE FOUR',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <div>
        <Expenses itemsDef={expenses}/>
      </div>

    </div>
  );
}

export default App;
