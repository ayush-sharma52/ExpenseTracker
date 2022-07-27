import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  if (props.list.length === 0)
    return <h2 className="expenses-list__fallback">No Expense To Show</h2>;

  return (
    <ul className="expenses-list">
      {props.list.map((Expense) => (
        //here we are using js but this function will return jsx code thus it is valid
        <ExpenseItem
          key={Expense.id} //to prevent re-rendering(state-change) of whole list because react identify each item as same
          // and add the new item in last and then again compare all items to the items array and re-render
          title={Expense.title}
          amount={Expense.amount}
          date={Expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
