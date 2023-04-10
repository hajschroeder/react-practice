import './ExpenseForm.css'

const ExpenseForm = () => {
  const titleChangeHandler = () =>{
    console.log('titleChangeHandler from ExpenseForm.js')
  }
  const testChangeHandler = (flimflam) =>{
    console.log(console.log(flimflam.target.value))
  }
  // SEE 6th BULLET POINT BELOW
  // const testChangeHandler = (event) =>{
  //   console.log(console.log(event))
  // }
  return (
    <form>
      <div className="new-expense__controls ">
        <div className="new-expense__control ">
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler}/>
        </div>
        {/* -The following was some test code for demonstation purposes. 
        -In opening the Dev tools, after this test function executes the console will give us an object full of data. 
        -The important info is the 'target' field which points to the DOM element for which the event occurred (in this case, the input element), and the element in turn has a long list of properties we can access
        -But among all those properties is a 'value' property, which holds the current value of the input at the current time the event occurs. 
        -This means that we can drill into the target and then the value to get the value that was entered when the event occurred for the element we are listening to. 
        -The function initially called the 'event' which gave us our object in the console. When we change it to call `event.target.value`, the code drills into target within the object, then value, and we see all our changes in the console.  
        - `event ` could have been called anything. I changed it to say 'flimflam' and then called 'flimflam.target.value and got the same result. `event` is common naming convention*/}
        <div className="new-expense__control ">
          <label>TitleTEST</label>
          <input type='text' onChange={testChangeHandler}/>
        </div>
        <div className="new-expense__control ">
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' />
        </div>
        <div className="new-expense__control ">
          <label>Date</label>
          <input type='date' min="2019-01-01" max="2024-12-12" />
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