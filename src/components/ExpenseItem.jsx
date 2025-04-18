
import React, { useState } from 'react';
//import { motion } from 'framer-motion';

const ExpenseItem = ({ expense, onDelete, onEdit }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editedAmount, setEditedAmount] = useState(expense.amount);

  const handleEdit = () => {
    onEdit({ ...expense, amount: parseFloat(editedAmount) });
    setIsEditing(false);
  };

  return (
    <>
      <li>
        {expense.name}: 
        {isEditing ? (
          <input type="number" value={editedAmount} onChange={(e) => setEditedAmount(e.target.value)} onBlur={handleEdit}/>
          ) : (
          `€${expense.amount}`
        )}
        <div className="actions">
          <button className="edit" onClick={() => setIsEditing(!isEditing)}>Bearbeiten</button>
          <button onClick={() => onDelete(expense.id)}>Löschen</button>
        </div>
      </li>
    </>
  );
};

export default ExpenseItem;
