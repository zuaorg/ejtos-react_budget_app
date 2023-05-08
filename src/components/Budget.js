import React, { useState,useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = (props) => {
    const { dispatch,totalExpenses } = useContext(AppContext);
    const [budget,setBudget] = useState("");

    const submitEvent = () => {

        if(budget > 20000) {
            alert("The value cannot exceed 20000");
            setBudget("");
            return;
        }
        else{
            dispatch({
                type: 'SET_BUDGET',
                payload: budget,
            });
        }
    }

    return (
        <div className='alert alert-secondary'>
            <label for="edtbudget">Budget: £</label>
            <input id="edtbudget" type="number" step="10" value={budget} 
            onChange = {(event) => setBudget(event.target.value)}
            onfocusout = {(submitEvent)}></input>
        </div>
    );
};
export default Budget;
