import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TransactionModel from './models/TransactionModel';

import '../App.css'



class AddTransaction extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            amountText: '',
            payerText: '',
            descriptionText: '',
            categoryText: '',
            accountText: ''
        }
    }

    updateText = (e) => {
        let update = {};
        switch(e.target.id) {
            case 'transactionInput':
                update = {amountText: e.target.value};
                break;
            case 'payerInput':
                update={payerText: e.target.value};
                break;
            case 'descriptionInput':
                update = {descriptionText: e.target.value};
                break;
            case 'categoryInput':
                update = {categoryText: e.target.value};
                break;
            case 'accountInput':
                update = {accountText: e.target.value};
                break;
            default:
        }
        this.setState(update);
    }
    
    handleSubmit = (e) => {
        e.preventDefault()

        let amountInt = parseInt(this.state.amountText, 10); 
        let from = amountInt <= 0 ? this.state.accountText : this.state.payerText;
        let to = amountInt > 0 ? this.state.accountText : this.state.payerText;

        let newTransaction = TransactionModel(amountInt, from, to, this.state.descriptionText, this.state.categoryText, 'vendor');

        this.props.addTransaction(newTransaction);
    }

    render() {
        return (
            <div className='AddTransaction'>
                <h4 style={{marginBottom:'5px'}}>Add Transaction</h4>
                <form className='form' onSubmit={this.handleSubmit.bind(this)}>
                    <label className='form-label'>Transaction Amount</label>
                    <input
                        type='text'
                        placeholder='Transaction Amount...'
                        className='form-element'
                        value={this.state.amountText}
                        id='transactionInput'
                        onChange={this.updateText}
                    />
                    <label className='form-label'>Payer/Payee</label>
                    <input 
                        type='text'
                        className='form-element'
                        value={this.state.payerText}
                        id='payerInput'
                        onChange={this.updateText}
                    />
                    <label className='form-label'>Description</label>
                    <input
                        type='text'
                        placeholder='Description'
                        className='form-element'
                        value={this.descriptionText}
                        id='descriptionInput'
                        onChange={this.updateText}
                    />
                    <label className='form-label'>Category</label>
                    <input
                        type='text'
                        placeholder='Category'
                        className='form-element'
                        value={this.categoryText}
                        id='categoryInput'
                        onChange={this.updateText}
                    />
                    <label className='form-label'>From/To Account</label>
                    <input
                        type='text'
                        placeholder='Account'
                        className='form-element'
                        value={this.accountText}
                        id='accountInput'
                        onChange={this.updateText}
                    />
                    <input
                        type='submit'
                        value='Submit'
                    />
                </form>
            </div>
        )
    }
}

AddTransaction.propTypes = {
    addTransaction: PropTypes.func.isRequired 
}

export default AddTransaction;