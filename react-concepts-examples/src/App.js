import {useState} from 'react';

import Expenses from "./components/Expenses";
import ExpensesData from "./components/ExpensesData";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const [expenses, setExpenses] = useState([])

  const addNewExpenseHandler = (newExpense) => {
    console.log('In App.JS');
    console.log(newExpense);
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses]
    })
    console.log(expenses);
    // ExpensesData.push(newExpense)
  }

  return (
    <div>
      <NewExpense addNewExpense={addNewExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
