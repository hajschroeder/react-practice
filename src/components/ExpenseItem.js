import './ExpenseItem.css'

function ExpenseItem (props) {


  return (
    <div className="expense-item"> 
      <div>{props.date.toDateString()}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
      </div>
    </div>
  ) 
}

export default ExpenseItem
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
