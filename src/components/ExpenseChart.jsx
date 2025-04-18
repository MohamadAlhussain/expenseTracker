
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ expenses }) => {
  
  let totalExpenses = 0;
  for (let i = 0; i < expenses.length; i++) {
    totalExpenses += expenses[i].amount; 
  }

  
  const data = {
    
    labels: expenses.map((expense) => `${expense.name} (${((expense.amount / totalExpenses) * 100).toFixed(2)}%)`),
    datasets: [
      {
      
        data: expenses.map((expense) => expense.amount),
       
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#F44336', '#4CAF50', '#FFC107', '#2196F3'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#F44336', '#4CAF50', '#FFC107', '#2196F3'],
      },
    ],
  };

 
  return (
    <div>
      <h2>Ausgabenübersicht</h2> 
      <Pie data={data} /> 
    </div>
  );
};

export default ExpenseChart;
