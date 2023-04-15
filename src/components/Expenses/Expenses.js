import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('Show All')
  const yearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.itemsDef.filter(expenseElement => {
    return expenseElement.date.getFullYear().toString() === filteredYear;
  });
//  THE FOLLOWING WAS MOVED TO ExpensesList.js
  // let expensesContent = <p>None Found</p>;

  // if(filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expenseElement) => (
  //     <ExpenseItem
  //       key={expenseElement.itemNumber}
  //       expenseTitle={expenseElement.title} 
  //       expenseAmount={expenseElement.amount} 
  //       expenseDate={expenseElement.date}
  //     />
      
  //   ))
  // }
  return (
    <div>

    <Card className="expenses">
      <ExpensesFilter 
        shownYear={filteredYear} 
        onChangeFilter={yearChangeHandler} 
      />
      <ExpensesList itemsDef={filteredExpenses}/>
      {/* {expensesContent} */}
      {/* Everything below was moved above the JSX portion of the component to be within the component function, keeping the JSX as lean as possible */}
        {/* {props.itemsDef.map((expenseElement) => */}
        {/* {filteredExpenses.length === 0 && <p>None Found</p>}
        {filteredExpenses.length > 0 && (
        filteredExpenses.map((expenseElement) =>
          (<ExpenseItem
            key={expenseElement.itemNumber}
            expenseTitle={expenseElement.title} 
            expenseAmount={expenseElement.amount} 
            expenseDate={expenseElement.date}
          />)))} */}

        {/* The following was how the code was written before branch 12. We had a block of HTML/JSX for each expense item. Ie, we hardcoded the amount of expenses, which were drilled into the hard coded expenses array within App. (In the near future we will be gathering this data via databases and APIs, but for now it is hardcoded) */}
        {/* <ExpenseItem
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

      /> */}
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