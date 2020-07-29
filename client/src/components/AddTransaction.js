import React, { useState } from 'react';
import '../App.css'

class AddTransaction extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            amountText: '',
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
    

    render() {
        return (
            <div className='AddTransaction'>
                <h4 style={{marginBottom:'5px'}}>Add Transaction</h4>
                <form className='form'>
                    <label className='form-label'>Transaction Amount</label>
                    <input
                        type='text'
                        placeholder='Transaction Amount...'
                        className='form-element'
                        value={this.state.amountText}
                        id='transactionInput'
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

export default AddTransaction;