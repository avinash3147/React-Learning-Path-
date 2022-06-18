import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const date = new Date(props.date)
    const expenseYear = date.getFullYear();
    const expenseMonth = date.toLocaleString('en-US', { month: 'long'});
    const expenseDay = date.toLocaleString('en-US', {day: '2-digit'});

    return <div className="expense-date">
        <h2 className="expense-date-day">{expenseDay}</h2>
        <h2 className="expense-date-month">{expenseMonth}</h2>
        <h2 className="expense-date-year">{expenseYear}</h2>
    </div>
}

export default ExpenseDate;