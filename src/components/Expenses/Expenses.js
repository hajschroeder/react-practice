import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2021')
  const yearChangeHandler = selectedYear => {
    console.log('Expenses.js')
    console.log(selectedYear)
    setFilteredYear(selectedYear)
  }
  return (
    <div>

    <Card className="expenses">
      <ExpensesFilter shownYear={filteredYear} onChangeFilter={yearChangeHandler} />
      <ExpenseItem
        expenseTitle={props.itemsDef[0].title}
        expenseAmount={props.itemsDef[0].amount}
        expenseDate={props.itemsDef[0].date}
        expenseId={props.itemsDef[0].itemNumber}
      />
      <ExpenseItem
        expenseTitle={props.itemsDef[1].title}
        expenseAmount={props.itemsDef[1].amount}
        expenseDate={props.itemsDef[1].date}
        expenseId={props.itemsDef[1].itemNumber}

      />
      <ExpenseItem
        expenseTitle={props.itemsDef[2].title}
        expenseAmount={props.itemsDef[2].amount}
        expenseDate={props.itemsDef[2].date}
        expenseId={props.itemsDef[2].itemNumber}

      />
      <ExpenseItem
        expenseTitle={props.itemsDef[3].title}
        expenseAmount={props.itemsDef[3].amount}
        expenseDate={props.itemsDef[3].date}
        expenseId={props.itemsDef[3].itemNumber}

      />
    </Card>
  </div>
  );
}

export default Expenses;

//this was my attempt. 
// import './Expenses.css';


// function Expenses (props) {
//   const title = props.title
//   const amount = props.amount
//   const date = props.date
  
//   return (
//     <div className='expenses'>
//       <div>{title}</div>
//       <div>{amount}</div>
//       <div>{date}</div>
//     </div>
//   );

// }

// export default Expenses; 