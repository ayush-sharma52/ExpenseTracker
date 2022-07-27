import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";
import Card from "../UI/card.js";
import ExpenseFilter from "./ExpenseFilter.js";
import { useState } from "react";
import ExpensesList from "./ExpensesList.js";
import ExpenseChart from "./ExpensesChart.js";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filteredExpenses=props.arr.filter( expense =>expense.date.getFullYear().toString()===filteredYear)
  
  function selectedYearHandler(filteredYear) {
    setFilteredYear(filteredYear);
  }

  return (
  <div>
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onYearSelected={selectedYearHandler}
      />
      {/* {filteredExpenses.length===0&&<p>NoExpenses To Show</p>}
      {filteredExpenses.length>0&&filteredExpenses.map((Expense) =>
       <ExpenseItem
         key={Expense.id}  //to prevent re-rendering(state-change) of whole list because react identify each item as same 
         // and add the new item in last and then again compare all items to the items array and re-render
         title={Expense.title}
         amount={Expense.amount}
         date={Expense.date}
       />
     )}  */}
     <ExpenseChart items={filteredExpenses}></ExpenseChart>
     <ExpensesList list={filteredExpenses}/>
    </Card>
    </div>
  );
}
export default Expenses;
