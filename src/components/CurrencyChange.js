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
        <div>
            <label for="inputGroupSelect01" className='alert alert-secondary' style={{background: "lightgreen"}}>Currency:
            <select style={{background: "lightgreen"}} name="selector" id="inputGroupSelect01" onChange={(event) => onCurrencyChange(event)}>
                <option value="$"> $ Dollar</option>
                <option selected value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select></label>
        </div>
    );
};
export default Currency;

