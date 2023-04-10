import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  return (
    <Card className="expenses">
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