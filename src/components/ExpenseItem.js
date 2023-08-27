import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import plus from '../img/plus.svg';
import minus from '../img/minus.svg';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };


            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense
            });

        }

        const decreaseAllocation = (name) => {
            const expense = {
                name: name,
                cost: 10,
            };
    
    
                dispatch({
                    type: 'SUBTRACT_EXPENSE',
                    payload: expense
                });
    
            }

        return (
            <tr>
                <td>{props.name}</td>
                <td>{currency.unit}{props.cost}</td>
                <td>
                    <button style={{ width: '50px', height: '40px' }} type="button" title='increase by 10' onClick={event => increaseAllocation(props.name)}>
                        <img src={plus} alt='+' />
                    </button>
                </td>
                <td>
                    <button style={{ width: '50px', height: '40px' }} type="button" title='increase by 10' onClick={event => decreaseAllocation(props.name)}>
                        <img src={minus} alt='-' />
                    </button>
                </td>
                <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
            </tr>
        );
    };

    export default ExpenseItem;