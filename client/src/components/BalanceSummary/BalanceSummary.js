import React from 'react';
import PropTypes from 'prop-types';

import './BalanceSummary.css'


class BalanceSummary extends React.Component {

    render() {
        return (
            <div className="balance-summary">
                <h4>Balance Summary</h4>
                <div className='row'>
                    <div className='box'>
                        <h4 style={{marginBottom:'10px'}}> Net Balance</h4>
                        <span style={{fontSize:'20px', fontWeight:'bold'}}>$<b style={{fontSize:'150%'}}>{
                            this.props.transactions
                            .filter(transact => {
                                if(transact.transactionType === 'external') {
                                    return transact
                                }
                            })
                            .reduce((acc, currVal) => acc + currVal.amount, 0)
                        }</b></span>
                    </div>
                    <div className='box'>
                        <h4 style={{marginBottom:'10px'}}>Net Income</h4>
                        <span style={{fontSize:'20px', fontWeight:'bold'}}>$<b style={{fontSize:'150%'}}>{
                            this.props.transactions
                            .filter(transact => {
                                if(transact.amount > 0) {
                                    return transact;
                                }
                            })
                            .filter(transact => {
                                if(transact.transactionType === 'external') {
                                    return transact
                                }
                            })
                            .reduce((acc, currVal) => acc + currVal.amount, 0)
                        }</b></span>
                    </div>
                    <div className='box'>
                        <h4 style={{marginBottom:'10px'}}>Net Expenses</h4>
                        <span style={{fontSize:'20px', fontWeight:'bold'}}>$<b style={{fontSize:'150%'}}>{
                            this.props.transactions
                            .filter(transact => {
                                if(transact.amount <= 0) {
                                    return transact;
                                }
                            })
                            .filter(transact => {
                                if(transact.transactionType === 'external') {
                                    return transact
                                }
                            })
                            .reduce((acc, currVal) => acc + currVal.amount, 0)
                        }</b></span>
                    </div>
                </div>
    
            </div>
        )
    }
}

BalanceSummary.propTypes = {
    transactions: PropTypes.array.isRequired
}

export default BalanceSummary;