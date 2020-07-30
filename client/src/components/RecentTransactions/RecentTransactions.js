import React from 'react';

import Transaction from './RecentTransactionItem.js';

import './RecentTransactions.css';


const RecentTransactions = (props) => {
    return (
        <div className='recent-transactions'>
            <h4 style={{marginBottom: '0px', marginTop: '10px'}}>Recent Transactions</h4>
            <ul style={{maxHeight: '100px', overflowY: 'scroll', overflow: 'auto'}}>
                {props.transactions.map(transaction =>
                    <Transaction transaction={transaction} />)}
            </ul>

        </div>
    )
}

export default RecentTransactions;