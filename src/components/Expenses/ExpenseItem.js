import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
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
