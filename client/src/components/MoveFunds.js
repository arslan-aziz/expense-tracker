import React from 'react';

const MoveFunds = (props) => {
    return (
        <div className='MoveFunds'>
            <h4 style={{marginBottom:'5px'}}>Move Funds</h4>
            <form className='form'>
                <label className='form-label'>Move Amount</label>
                <input
                    type='text'
                    placeholder='Transaction Amount...'
                    className='form-element'
                />
                <label className='form-label'>From Account</label>
                <input
                    type='text'
                    placeholder='From'
                    className='form-element'
                />
                <label className='form-label'>To Account</label>
                <input
                    type='text'
                    placeholder='To'
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

export default MoveFunds;
