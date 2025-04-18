
import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({ expenses, deleteExpense, editExpense }) => {

  let totalExpenses = 0;
  for (let i = 0; i < expenses.length; i++) {
    totalExpenses += expenses[i].amount;
  }

  return (
    <>
      <ul>
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} onDelete={deleteExpense} onEdit={editExpense} />
        ))}
      </ul>
      <div className="total">
        
        <h2>Gesamtausgaben: € {totalExpenses}</h2>
      </div>
    </>
  );
};

export default ExpenseList;
