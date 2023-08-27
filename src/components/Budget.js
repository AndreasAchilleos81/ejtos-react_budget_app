import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    
    const updateBudget = (updatedBugdet) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: updatedBugdet
        });
    };

    return (
        <div className='alert alert-secondary'>
            <label htmlFor='budgetInput'>Budget:{currency.unit}</label>
            <input
                type='number'
                id='budgetInput'
                required='required'
                value={budget}
                step={10}
                max={20000}
                onChange={(event) => {
                    if(event.target.value > 20000){
                        alert('Not allowed a budget over 20k');    
                        return;
                    }
                    if (event.target.value < totalExpenses) {
                        alert('Not allowed a budget lower than Spent so far');
                        return;
                    }

                    updateBudget(event.target.value)
                }}>

            </input>
        </div>
    );
};
export default Budget;