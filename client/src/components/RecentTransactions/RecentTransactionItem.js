import React from 'react';

import './RecentTransactions.css';

const Transaction = (props) => {
    return (
        <li className='element'>
            ${Math.abs(props.transaction.amount)} from {props.transaction.from} to {props.transaction.to}
        </li>
    )
}

export default Transaction;