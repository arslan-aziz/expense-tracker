import React from 'react';

import Header from './components/Header';
import BalanceSummary from './components/BalanceSummary/BalanceSummary';
import RecentTransactions from './components/RecentTransactions/RecentTransactions';
import AddTransaction from './components/AddTransaction';
import MoveFunds from './components/MoveFunds';

import './App.css';



let transactions = [
  {
    id: 1,
    amount: -40,
    text: 'Groceries at Harris Teeter',
    account: 'Checking'
  },
  {
    id: 2,
    amount: 40,
    text: 'Tutoring Math',
    account: 'Checking'
  },
  {
    id: 3,
    amount: 1000,
    text: 'Payroll',
    account: 'Savings',
  },
  {
    id: 4,
    amount: 10,
    text: 'hello',
    account: 'lalaland'
  }
]

function App() {
  return (
    <div className="App">
      <Header />
      <BalanceSummary />
      <RecentTransactions transactions={transactions}/>
      <div className='forms'>
        <AddTransaction />
        <MoveFunds />
      </div>
    </div>
  );
}

export default App;
