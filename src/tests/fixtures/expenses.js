import moment from 'moment';

export default [{
    id: '1',
    amount: 195,
    description: 'Gum',
    note: '',
    createdAt: 0
}, {
    id: '2',
    amount: 14500,
    description: 'Rent',
    note: '',
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    amount: 1650,
    description: 'Water Bill',
    note: '',
    createdAt: moment(0).add(4, 'days').valueOf()
}]