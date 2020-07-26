import React from 'react';

import './RecentTransactions.css';

const Transaction = (props) => {
    return (
        <li className='element'>
            ${Math.abs(props.transaction.amount)} {props.transaction.amount <= 0 ? 'to ' : 'from '} 
            {props.transaction.text} {props.transaction.amount <= 0 ? 'from ' : 'to '}  
            {props.transaction.account}
        </li>
    )
}

export default Transaction;