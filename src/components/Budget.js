import React, { useState } from 'react';
//import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useState('');
    return (
        <div className='alert alert-secondary'>
            <label for="edtbudget">Budget: £</label>
            <input id="edtbudget" type="number" step="10" value={budget}
            onChange></input>
        </div>
    );
};
export default Budget;
