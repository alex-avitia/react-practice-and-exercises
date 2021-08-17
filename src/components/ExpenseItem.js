import React from 'react';


import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem (props) {

    //you cannot use custom components as wrappers around other parts of content i.e. Card

    return (
        <Card className="expense-item">
        <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );
}

//must be exported to be used outside of this js file
export default ExpenseItem;