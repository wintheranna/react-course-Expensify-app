import React from 'react';
import {shallow} from 'enzyme';
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from '../fixtures/expenses';

//should handle editexpense, spy
//should handle removeexpense spy

let startEditExpense, history, startRemoveExpense, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<EditExpensePage 
        startEditExpense={startEditExpense} 
        history={history} 
        startRemoveExpense={startRemoveExpense}
        expense={expenses[1]}
        />);
});
    

test ('should render edit expense page', () => {
    expect(wrapper).toMatchSnapshot();
});


test ('should handle edit expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test ('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('Click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[1].id});
});