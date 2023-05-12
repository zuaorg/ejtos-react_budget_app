import React, { useState,useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, expenses, currency } = useContext(AppContext);
    const [budget,setBudget] = useState(2000);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const onBudgetChange = (event) => {

        if(event.target.value > 20000) {
            alert("The value cannot exceed 20000");
            setBudget(2000);
            return;
        }
        else if(event.target.value < totalExpenses){
            alert("Budget must be greater than expense");
            setBudget(2000);
            return;
        }
        else{
            setBudget(event.target.value);
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value,
            });
        }
    }

    return (
        <div className='alert alert-secondary'>
            <label for="edtbudget">Budget: {currency}</label>
            <input id="edtbudget" type="number" step="10" value={budget} 
            onChange = {(event) => onBudgetChange(event)}></input>
        </div>
    );
};
export default Budget;
