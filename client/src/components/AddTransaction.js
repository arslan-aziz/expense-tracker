import React, { useState } from 'react';
import '../App.css'

const AddTransaction = () => {

    return (
        <div className='AddTransaction'>
            <h4 style={{marginBottom:'5px'}}>Add Transaction</h4>
            <form className='form'>
                <label className='form-label'>Transaction Amount</label>
                <input
                    type='text'
                    placeholder='Transaction Amount...'
                    className='form-element'
                />
                <label className='form-label'>Description</label>
                <input
                    type='text'
                    placeholder='Description'
                    className='form-element'
                />
                <label className='form-label'>Category</label>
                <input
                    type='text'
                    placeholder='Category'
                    className='form-element'
                />
                <label className='form-label'>From/To Account</label>
                <input
                    type='text'
                    placeholder='Account'
                    className='form-element'
                />
                <input
                    type='submit'
                    value='Submit'
                />
            </form>
        </div>
    )
}



export default AddTransaction;