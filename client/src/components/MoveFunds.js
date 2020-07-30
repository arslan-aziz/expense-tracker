import React from 'react';

import TransactionModel from './models/TransactionModel';

class MoveFunds extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            amountText: '',
            fromText: '',
            toText: ''
        }
    }

    updateText = (e) => {
        let result = {};
        switch(e.target.id) {
            case 'amountInput':
                result = {amountText: e.target.value};
                break;
            case 'fromInput':
                result = {fromText: e.target.value};
                break;
            case 'toInput':
                result = {toText: e.target.value};
                break;
            default:
        }
        this.setState(result);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let amountInt = parseInt(this.state.amountText);

        let newTransaction = TransactionModel(amountInt, this.state.fromText, this.state.toText, 
                '', '', 'internal');

        this.props.addTransaction(newTransaction);

    }

    render() {
        return (
            <div className='MoveFunds'>
                <h4 style={{marginBottom:'5px'}}>Move Funds</h4>
                <form className='form' onSubmit={this.handleSubmit.bind(this)}>
                    <label className='form-label'>Move Amount</label>
                    <input
                        type='text'
                        placeholder='Transaction Amount...'
                        className='form-element'
                        value={this.state.amountText}
                        id='amountInput'
                        onChange={this.updateText}
                    />
                    <label className='form-label'>From Account</label>
                    <input
                        type='text'
                        placeholder='From'
                        className='form-element'
                        value={this.state.fromText}
                        id='fromInput'
                        onChange={this.updateText}
                    />
                    <label className='form-label'>To Account</label>
                    <input
                        type='text'
                        placeholder='To'
                        className='form-element'
                        value={this.state.toText}
                        id='toInput'
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

export default MoveFunds;
