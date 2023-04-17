import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const allExpenses=(props.itemsDef)
  const [filteredYear, setFilteredYear] = useState('all-expenses')
  const yearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = allExpenses.filter(expenseElement => {
    if (filteredYear === 'all-expenses') {
      return allExpenses
    } else 
    return expenseElement.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div>

    <Card className="expenses">
      <ExpensesFilter 
        shownYear={filteredYear} 
        onChangeFilter={yearChangeHandler} 
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList itemsDef={filteredExpenses}/>
    </Card>
  </div>
  );
}

export default Expenses;
