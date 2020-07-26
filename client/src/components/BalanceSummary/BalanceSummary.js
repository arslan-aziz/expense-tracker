import React from 'react';
import './BalanceSummary.css'


const BalanceSummary = () => {
    return (
        <div className="balance-summary">
            <h4>Balance Summary</h4>
            <div className='row'>
                <div className='box'>
                    <h4 style={{marginBottom:'10px'}}> Net Balance</h4>
                    <span style={{fontSize:'20px', fontWeight:'bold'}}>$<b style={{fontSize:'150%'}}>0</b></span>
                </div>
                <div className='box'>
                    <h4 style={{marginBottom:'10px'}}>Net Income</h4>
                    <span style={{fontSize:'20px', fontWeight:'bold'}}>$<b style={{fontSize:'150%'}}>0</b></span>
                </div>
                <div className='box'>
                    <h4 style={{marginBottom:'10px'}}>Net Expenses</h4>
                    <span style={{fontSize:'20px', fontWeight:'bold'}}>$<b style={{fontSize:'150%'}}>0</b></span>
                </div>
            </div>

        </div>
    )
}

export default BalanceSummary;