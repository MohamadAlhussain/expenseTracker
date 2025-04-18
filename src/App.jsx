
import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseChart from './components/ExpenseChart';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  /* ------------------------------------------------------- add expense*/
  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  /* ------------------------------------------------------- delete expense*/
  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  /* ------------------------------------------------------- edit expense*/
  const editExpense = (updatedExpense) => {
    setExpenses(
      expenses.map(expense => (expense.id === updatedExpense.id ? updatedExpense : expense))
    );
  };

  return (
    <div className="container">
      <div className="section">

        {/* ------------------------------------------------------- the form*/}
        <h1>Ausgabenverfolgung</h1>
        <ExpenseForm addExpense={addExpense} />
      </div>

        {/* ------------------------------------------------------- the list*/}
      <div className="section">
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} editExpense={editExpense} />
      </div>
      
        {/* ------------------------------------------------------- the chart*/}
      <div className="section">
        <ExpenseChart expenses={expenses} />
        
      </div>
    </div>
  );
};

export default App;
