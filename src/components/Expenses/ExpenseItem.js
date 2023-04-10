import { React, useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
// The general layout of each expense within this total application is built here. The data being shown via props.expenseXYZ is being grabbed from the Expenses.js file, which is grabbing it from the hard coded data within App.js. props.expenseXYZ is looking at Expenses, expenseXYZ in Expenses is grabbing it from the expenses array within App.js, all of whihc is info that is stored as Key-Value pairs within itemsDef (itemsDef=expenses)
// It could be helpful the think of the components (in this case) as passing their skeleton up the tree, but then the tree is passing the fruit back down...Idunno, I feel high. 
// declare a function. In this case it takes the 'props' attribute because we will be using those within this component
function ExpenseItem(props) {
// the below function is declared within the function itself as a constant, and can now be accessed by the return statement. 
// Typically this would be named something like clickHandler, it is good practice to end the name of an event handler with the word 'Handler'. But I'm having fun soooo whatever

// useState is a built in react HOOK. It is used to change data within a React App. If you have data that might change and that change should be reflected within the App, you need useState 
const [stateTitle, setStateTitle] = useState(props.expenseTitle);
// The following was written as a test. It worked as desired.   
// const [stateAmount, setStateAmount] = useState(props.expenseAmount);
const ringMyBell = () => {
  setStateTitle('Updated stateTitle');
  // setStateAmount('$new Amount')
    console.log(`Lucky Number ${Math.floor(Math.random()*5000)}`)
    console.log(stateTitle)
    // console.log(stateAmount)
  };
  return (
    <Card className='expense-item'>
     {/* This is our first use of props. It is grabbing the .expenseDate as defined in Expenses.js */}
      <ExpenseDate date={props.expenseDate} />
      <div className='expense-item__description'>
        {/* Also taking the title prop from Expenses.js */}
        <h2>{stateTitle}</h2>
        {/* amount prop from Expense.js */}
        {/* <div className='expense-item__price'>${stateAmount}</div> */}
        <div className='expense-item__price'>${props.expenseAmount}</div>
      </div>
      <button onClick={ringMyBell}>{`Click #${props.expenseId} for heaven`}</button>
    </Card>
  );
}

export default ExpenseItem;
// The Following got moved to it's own component ExpenseDate
  // const month =  props.date.toLocaleString('en-us', { month: 'long' })
  // const day = props.date.toLocaleString('en-us', { day: '2-digit' })
  // const year = props.date.getFullYear()
//   return (
//     <div className="expense-item"> 
//       <div>
//         <div>{month}</div>
//         <div>{day}</div>
//         <div>{year}</div>
//       </div>
//       <div className='expense-item__description'>
//         <h2>{props.title}</h2>
//         <div className='expense-item__price'>{props.amount}</div>
//       </div>
//     </div>
//   ) 
// }

// export default ExpenseItem
// Below is the code before using 'props'

// import './ExpenseItem.css'

// function ExpenseItem () {

//   const expenseDate = new Date(2023, 3, 8);
//   const expenseTitle = 'HardCoded Title';
//   const expenseAmount = 'Hard Coded Amount';
//   return (
//     <div className="expense-item"> 
//       <div>{expenseDate.toDateString()}</div>
//       <div className='expense-item__description'>
//         <h2>{expenseTitle}</h2>
//         <div className='expense-item__price'>{expenseAmount}</div>
//       </div>
//     </div>
//   ) 
// }

// export default ExpenseItem
