import React from 'react';

import Header from './components/Header';
import BalanceSummary from './components/BalanceSummary/BalanceSummary';
import CategoryAllocationChart from './components/BalanceSummary/CategoryAllocationChart';
import RecentTransactions from './components/RecentTransactions/RecentTransactions';
import AddTransaction from './components/AddTransaction';
import MoveFunds from './components/MoveFunds';
import TransactionModel from './components/models/TransactionModel';

import './App.css';


class App extends React.Component {

  state = {
    transactions: [
      TransactionModel(-40, 'Checking', 'Harris Teeter', 'Bread and eggs', 'Groceries', 'external'),
      TransactionModel(-30, 'Checking', 'Amazon', 'masks', 'Misc', 'external'),
      TransactionModel(1000, 'Job', 'Savings', 'payroll', 'Income', 'external'),
      TransactionModel(500, 'Savings', 'Checking', '', '', 'internal')
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
        <CategoryAllocationChart />
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
