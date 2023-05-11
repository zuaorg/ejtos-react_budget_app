import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const [currency, setCurrency] = useState("");

    const onCurrencyChange = (event) => {
        setCurrency(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <label for="selector">Currency: </label>
            <select className="custom-select" name="selector" id="inputGroupSelect01" onChange={(event) => onCurrencyChange(event)}>
                <option value="$"> $ Dollar</option>
                <option selected value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;

