import './ExpenseItem.css';

function ExpenseItem () {
    return (
        <div className="expense-item">
            <div>August 3rd 2021</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$249.67</div>
            </div>
        </div>
    );
}

//must be exported to be used outside of this js file
export default ExpenseItem;