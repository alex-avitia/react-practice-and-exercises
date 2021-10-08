import React from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
    const titleChangeHandler = (event) => {
       // document.getElementById('').addEventListener('click', () => {});
       // by targeting the 'event', lots of information comes up upon the event handler executing
       // target specifically the value of the information in the title will be logged in the console
        console.log(event.target.value);
    };
    // this will be pointed to in the onChange listener, but not yet executed

    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min="2021-01-01" max="2022-12-31" />
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
};

export default ExpenseForm;

// LINE 10: Adding listeners - onInput and onChange are similar, onInput is every keystroke, onChange is every keystroke but using the same even for all input types