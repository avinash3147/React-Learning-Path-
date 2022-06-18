import { useState  } from "react"

import ExpenseItem from "./ExpenseItem"
import ExpenseList from "./ExpenseList"
import './Expenses.css'
import ExpensesChart from "./ExpensesChart"
import FilterExpenses from "./FilterExpenses/FilterExpenses"

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filteredExpense = props.items.filter((item) => {
        return new Date(item.date).getFullYear().toString() === filteredYear
    });

    const filterChangeHandler = (value) => {
        console.log("Inside Expenses.js");
        setFilteredYear(value)
    }

    

    return <div className="expenses">
        <FilterExpenses selected={filteredYear} filterChangeHandler={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpense} />
        <ExpenseList items={filteredExpense} />
    </div>
}

export default Expenses;