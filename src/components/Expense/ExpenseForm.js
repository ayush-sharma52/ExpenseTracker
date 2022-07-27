import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState(""); //we can work with multiple states without concerning about their order
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  // const [userInput,setUserInput]=useState(  //or we can use them as properties
  // {
  //     title:'',
  //     amount:'',
  //     date:''
  // })
  function titleHandler(event) {
    setTitle(event.target.value);
    // console.log('title');
    // setUserInput({
    //     ...userInput,
    //     title:event.target.value
    // })
    // setUserInput((prevState)=>{
    //     return {...prevState,title:event.target.value};
    // })
  }
  function amountHandler(event) {
    setAmount(event.target.value);
    // console.log('amount');
    //  setUserInput((prevState)=>{
    //     return {...prevState,amount:event.target.value};
    // })
  }
  function dateHandler(event) {
    setDate(event.target.value);
    // console.log('date');

    // setUserInput((prevState)=>{
    //     return {...prevState,date:event.target.value};
    // })
  }
  function formHandler(event) {
    event.preventDefault();
    const inputs = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onAddExpense(inputs); //passing child to parent (state up)
    setTitle("");
    setAmount("");
    setDate(""); //2 way binding which can't be possible with global variables
  }
  return (
    <form onSubmit={formHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text"
           value={title} 
           onChange={titleHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
