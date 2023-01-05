import  expensesReducer  from '../reducers/expenses';
import filterReducer  from '../reducers/filters';
import { createStore, combineReducers }  from 'redux';

//Store Creation

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
    return store
}


