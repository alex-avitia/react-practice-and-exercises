import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    // by targeting the 'event', lots of information comes up upon the event handler executing
    // target specifically the value of the information in the title will be logged in the console
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        // setUserInput({
        //     // "...userInput" pulls out all key value pairs and adds them to the new object
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });

        // this guarantees that prevState will always be the latest state snapshot to update
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value};
        // });
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
        // setUserInput((prevState) => {
        //     return {...prevState, enteredAmount: event.target.value};
        // });
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
        // setUserInput((prevState) => {
        //     return {...prevState, enteredDate: event.target.value};
        // });
    };

    const submitHandler = (event) => {
        // JS built-in; prevent the default of the request being sent, the page will not reload
        event.preventDefault();

        // using "new Date" to construct a new date, then passing entered date and parsing the string into a date object
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2021-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
                <div className='new-expense__actions'>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
};

export default ExpenseForm;