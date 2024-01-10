import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';

export default function Expenses(props) {

  const expenses =[
    {id: 'e1',title: 'car', amount: 294.67, date: new Date(2021, 2, 28)},
    {id: 'e2',title: 'car', amount: 294.67, date: new Date(2021, 2, 28)},
    {id: 'e3',title: 'car', amount: 294.67, date: new Date(2021, 2, 28)},
    {id: 'e4',title: 'car', amount: 294.67, date: new Date(2021, 2, 28)},
  ]
  
  return (
    <div className='expenses'>

<ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
    </div>
  )
}
