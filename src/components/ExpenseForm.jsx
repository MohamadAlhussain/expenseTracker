
import React, { useState } from 'react';


const ExpenseForm = ({ addExpense }) => {

  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  /* ------------------------------------------------------- form submit function*/
  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),  
      name,
      amount: parseFloat(amount),
    };
    addExpense(newExpense);
    setName('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ------------------------------------------------------- name */}
      <input 
        type="text" 
        placeholder="Name der Ausgabe" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      {/* ------------------------------------------------------- betrag*/}
      <input 
        type="number" 
        placeholder="Betrag" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        required 
      />
      {/* ------------------------------------------------------- submit*/}
      <button type="submit">Ausgabe hinzufügen</button>
    </form>
  );
};

export default ExpenseForm;
