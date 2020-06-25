import React from 'react';
import {shallow} from 'enzyme';
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from '../fixtures/expenses';

//should handle editexpense, spy
//should handle removeexpense spy

let editExpense, history, removeExpense, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<EditExpensePage 
        editExpense={editExpense} 
        history={history} 
        removeExpense={removeExpense}
        expense={expenses[1]}
        />);
});
    

test ('should render edit expense page', () => {
    expect(wrapper).toMatchSnapshot();
});


test ('should handle edit expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test ('should handle remove expense', () => {
    wrapper.find('button').simulate('Click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[1].id});
});