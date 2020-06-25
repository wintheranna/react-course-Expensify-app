import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test ('should set default state values', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test ('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test ('should not remove expenses if id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test ('should add expenses', () => {
    const expense = {
        id: '123',
        amount: 195000,
        description: 'Gas Bill',
        note: '',
        createdAt: moment(0).add(8, 'days').valueOf()
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test ('should edit an expense', () => {
    const amount = 12200;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[2].amount).toBe(amount);
});

test ('should edit an expense', () => {
    const amount = 12200;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
