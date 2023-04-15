import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {

  if(props.itemsDef.length ===0) {
    return <h2 className="expneses-list__fallback">Found None</h2>
  }
  return <ul className="expenses-list">
    {props.itemsDef.map((expenseElement) => (
      <ExpenseItem
        key={expenseElement.itemNumber}
        expenseTitle={expenseElement.title} 
        expenseAmount={expenseElement.amount} 
        expenseDate={expenseElement.date}
      />
      
    ))}
  </ul>
}

export default ExpensesList