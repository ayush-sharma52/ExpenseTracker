import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

function NewExpense(props){

function addExpenseHandler(enteredExpenseData){
    const ExpenseData={
    ...enteredExpenseData,
    id:Math.random().toString()
};

    props.onGetExpense(ExpenseData);
}

    return(
        <div className='new-expense'>
        <ExpenseForm onAddExpense={addExpenseHandler} /> 
        </div>
    )
}
export default NewExpense;