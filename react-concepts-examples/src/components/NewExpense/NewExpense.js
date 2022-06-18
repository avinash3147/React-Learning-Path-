import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {

    const addExpenses = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString()
        }
        console.log("In NewExpense.js");
        console.log(expenseData);
        props.addNewExpense(expenseData)
    }

    return <div className='new-expense'>
        <ExpenseForm addExpenses={addExpenses} />
    </div>
}

export default NewExpense;