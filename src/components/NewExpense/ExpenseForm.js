import './ExpenseForm.css'
import { useState } from 'react'


const ExpenseForm = (props) => {

  // State is initialized using a string because the data type it returns is a string. 
  // The following version defines three different states for three different JSX elements
  // const [enteredTitle, setEnteredTitle] = useState('')
  // const [enteredAmount, setEnteredAmount] = useState('')
  // const [enteredDate, setEnteredDate] = useState('')
  //This version uses only one instance of useState, and the states for title, amount, and date are initialized as objects within the useState hook, where title and co are keys, and empty strings are the inital values
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });
  // const titleChangeHandler = (event) => {
  //   // The following was the inital function for updating state in this current method of one state for many elements, but it is not best practice
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredTitle: event.target.value
  //   // })
  //   //Best Practice Version: 
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredTitle: event.target.value}
  //   //the parameter within setUserInput can be anything, because the function knows to be looking at the state of the object
  //   // setUserInput((blooblaaState) => {
  //   //   return { ...blooblaaState, enteredTitle: event.target.value}
  //   })
  // }
  // const amountChangeHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredAmount: event.target.value
  //   })
  // }
  // const dateChangeHandler = (event) => {
  //   setUserInput({
  //     ...userInput,
  //     enteredDate: event.target.value
  //   })
  // }


  // const titleChangeHandler = (event) => {
  //   setUserInput({
  //     enteredTitle: event.target.value,
  //     enteredAmount: event.target.value,
  //     enteredDate: event.target.value
  // })
  // Above, if this were a professional app, I woud be using "event" as a blanket element name, even though each specific change handler would be speaking to a different event element. I wrote individual element names for each for learning purposes
  // SEE 6th BULLET POINT BELOW
  // const testChangeHandler = (flimflam) =>{
  //   console.log(console.log(flimflam.target.value))
  // }
  // const testChangeHandler = (event) =>{
  //   console.log(console.log(event))
  // }


  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  const titleChangeHandler = (titleEvent) => {
    console.log('titleChangeHandler from ExpenseForm.js')
    setEnteredTitle(titleEvent.target.value);
  }
  const amountChangeHandler = (amountEvent) => {
    setEnteredAmount(amountEvent.target.value)
  }
  const dateChangeHandler = (dateEvent) => {
    setEnteredDate(dateEvent.target.value)
  }
  const submitHandler = (submitEvent) => {
    submitEvent.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls ">
        <div className="new-expense__control ">
        {/* -The following was some test code for demonstation purposes. 
        -In opening the Dev tools, after this test function executes the console will give us an object full of data. 
        -The important info is the 'target' field which points to the DOM element for which the event occurred (in this case, the input element), and the element in turn has a long list of properties we can access
        -But among all those properties is a 'value' property, which holds the current value of the input at the current time the event occurs. 
        -This means that we can drill into the target and then the value to get the value that was entered when the event occurred for the element we are listening to. 
        -The function initially called the 'event' which gave us our object in the console. When we change it to call `event.target.value`, the code drills into target within the object, then value, and we see all our changes in the console.  
      - `event ` could have been called anything. I changed it to say 'flimflam' and then called 'flimflam.target.value and got the same result. `event` is common naming convention*/}
        {/* TEST <div className="new-expense__control ">
          <label>TitleTEST</label>
          <input type='text' onChange={testChangeHandler}/>
        </div> */}
        <label>Title</label>
        <input 
          type='text' 
          value={enteredTitle} 
          onChange={titleChangeHandler} 
        />
      </div>
        <div className="new-expense__control ">
          <label>Amount</label>
          <input 
            type='number' 
            min='0.01' 
            step='0.01' 
            onChange={amountChangeHandler} 
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control ">
          <label>Date</label>
          <input 
            type='date' 
            min="2019-01-01" 
            max="2024-12-12" 
            onChange={dateChangeHandler} 
            value={enteredDate}
          />
        </div>

      </div>
      <div className="new-expense__actions ">
        <button type="submit">Add Expense</button>
        {/* TEST <button type="submit" onClick={titleChangeHandler}>Add Expense</button> */}
      </div>
    </form>
  )
}

export default ExpenseForm