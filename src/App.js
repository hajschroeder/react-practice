import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
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

function App() {
  const[ expenseState, setExpenseState] =useState(DUMMY_EXPENSES)


  // const expenses = [
  //   {
  //     itemNumber: 1,
  //     title: 'EXPENSE ONE',
  //     amount: 94.12,
  //     date: new Date(2020, 7, 14),
  
  //   },
  //   { itemNumber: 2, 
  //     title: 'EXPENSE TWO', 
  //     amount: 799.49, 
  //     date: new Date(2021, 2, 12) 
  //   },
  //   {
  //     itemNumber: 3,
  //     title: 'EXPENSE THREE',
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     itemNumber: 4,
  //     title: 'EXPENSE FOUR',
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ];

  const addExpenseHandler = expense => {
    setExpenseState(prevExpenses => {
      return [expense, ...prevExpenses]
    });
    // console.log('app.js')
    // console.log(expense)
  }
  return (
    <div>
      <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses itemsDef={expenseState}/>
      </div>

    </div>
  );
}

export default App;
