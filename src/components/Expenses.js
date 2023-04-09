import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
  return (
    <div className='expenses'>
      <ExpenseItem 
        title={props.items[0].title} 
        amount={props.items[0].amount} 
        date={props.items[0].date}
      />
      <ExpenseItem 
        title={props.items[1].title} 
        amount={props.items[1].amount} 
        date={props.items[1].date}
      />
      <ExpenseItem 
        title={props.items[2].title} 
        amount={props.items[2].amount} 
        date={props.items[2].date}
      />
      <ExpenseItem 
        title={props.items[3].title} 
        amount={props.items[3].amount} 
        date={props.items[3].date}
      />
    </div>
  )
}

export default Expenses;
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