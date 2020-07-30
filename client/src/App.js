import React from 'react';

import Header from './components/Header';
import BalanceSummary from './components/BalanceSummary/BalanceSummary';
import RecentTransactions from './components/RecentTransactions/RecentTransactions';
import AddTransaction from './components/AddTransaction';
import MoveFunds from './components/MoveFunds';
import TransactionModel from './components/models/TransactionModel';

import './App.css';


class App extends React.Component {

  state = {
    transactions: [
      TransactionModel(1, 'Harris Teeter', 'Checking', 'Bread and eggs', 'Groceries', 'Expense')
      // {
      //   id: 1,
      //   amount: -40,
      //   text: 'Groceries at Harris Teeter',
      //   account: 'Checking'
      // },
      // {
      //   id: 2,
      //   amount: 40,
      //   text: 'Tutoring Math',
      //   account: 'Checking'
      // },
      // {
      //   id: 3,
      //   amount: 1000,
      //   text: 'Payroll',
      //   account: 'Savings',
      // },
      // {
      //   id: 4,
      //   amount: 10,
      //   text: 'hello',
      //   account: 'lalaland'
      // }
    ]
    
  }

  addTransaction = (transactionData) => {
    console.log('Adding transaction to recents');
    this.setState({ transactions: [...this.state.transactions, transactionData]})
  }

  render () {
    return (
      <div className="App">
        <Header />
        <BalanceSummary transactions={this.state.transactions}/>
        <RecentTransactions transactions={this.state.transactions}/>
        <div className='forms'>
          <AddTransaction addTransaction={this.addTransaction.bind(this)}/>
          <MoveFunds addTransaction={this.addTransaction.bind(this)}/>
        </div>
      </div>
    );
  }

}

export default App;
