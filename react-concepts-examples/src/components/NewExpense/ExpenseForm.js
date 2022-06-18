import {useState} from 'react';

import './ExpenseForm.css'

const ExpenseForm = (props) => {

    // const [title, setTitle] = useState('');
    // const [amount, setAmount] = useState('');
    // const [date, setDate] = useState('');

    // Another Way of doing
    const [userInput, setUserInput] = useState({
        title: '',
        date: '',
        amount: ''
    })

    const titleChangeHandler = (event) => {
        // setTitle(event.target.value)

        // Not Recomended
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value
        // })

        // Recomended
        setUserInput((prevState) => {
            return { ...prevState, title: event.target.value }
        })
    }

    const amountChangeHandler = (event) => {
        // setAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value
        // })

        setUserInput((prevState) => {
            return { ...prevState, amount: event.target.value }
        })
    }

    const dateChangeHandler = (event) => {
        // setDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // })

        setUserInput((prevState) => {
            return { ...prevState, date: event.target.value }
        })
    }

    const submitFormHandler = (event) => {
        event.preventDefault()
        const data = {
            title: userInput.title,
            amount: +userInput.amount,
            date: userInput.date
        }
        console.log(data);

        // Pass Added Expenses to parent
        props.addExpenses(data);

        setUserInput({
            title: '',
            date: '',
            amount: ''
        })
    }

    return (
        <form onSubmit={submitFormHandler}>
            <div className='expense-form-controls'>
                <div className='expense-form-control'>
                    <label>Title</label>
                    <input type='text'  value={userInput.title} onChange={titleChangeHandler}/>
                </div>
                <div className='expense-form-control'>
                    <label>Amount</label>
                    <input type='number' value={userInput.amount} min='0.1' onChange={amountChangeHandler}/>
                </div>
                <div className='expense-form-control'>
                    <label>Date</label>
                    <input type='date' value={userInput.date} min='2019-02-02' max='2022-12-31' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='expense-form-action'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;