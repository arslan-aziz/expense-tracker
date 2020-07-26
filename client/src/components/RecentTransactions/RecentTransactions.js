import React from 'react';
import PropTypes from 'prop-types';

import Transaction from './Transaction.js';

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