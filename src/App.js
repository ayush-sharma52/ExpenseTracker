import { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/Expense/NewExpense";

const initialExpense = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  //its just a javascript function so here  we can execute js
  const [expenses,setExpenses]=useState(initialExpense);
  
  function getExpenseHandler(ExpenseObj) {
setExpenses(prevExpenses => {
  return [ExpenseObj,...prevExpenses];
  });
  }

  return (
    //here we use jsx when we return anything
    //we can execute js code here by using {//js code }
    <div>
      <NewExpense onGetExpense={getExpenseHandler} />
      <Expenses arr={expenses}></Expenses>
    </div>
  );
  //that is a standard naming schema for components(1st letter capital unlike html tags
  //and that's how it differentiates between html tags and components)
}

export default App;
