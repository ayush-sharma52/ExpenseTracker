import React  from 'react'; //hooks always starts with 'use'
import './ExpenseItem.css';
import Expensedate from './Expensedate.js';
import Card from '../UI/card.js';

function ExpenseItem(props){ //attributes are recieved as properties of a object hence called props(parent to child)
    return (
    <Card className='expense-item'>
        <Expensedate date={props.date} />
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>₹{props.amount}</div>
        </div>
    </Card>
    );
    }
export default ExpenseItem;