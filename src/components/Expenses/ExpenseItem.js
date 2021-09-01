import React, { useState } from 'react';


import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    // hooks like this must be called inside React component functions
    // useState returns an array, where the first value is the parameter and the second is the update
    const [title, setTitle] = useState(props.title);

    let title = props.title;

    const clickHandler = () => {
        title = 'Updated.';
        console.log(title);
    };

    // you cannot use custom components as wrappers around other parts of content i.e. Card
    return (
        <Card className="expense-item">
        <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

//must be exported to be used outside of this js file
export default ExpenseItem;