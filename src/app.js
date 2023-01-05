import React from 'react'; //require(react) ES5 and theese ES-6 
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('app'));

const store = configureStore()
store.subscribe(()=>{
    const visibleExpense = getVisibleExpenses(store.getState().expenses, store.getState().filters)
    console.log(visibleExpense)
})

store.dispatch(addExpense({
    description:' Water bill',
    amount: 300,
}))

store.dispatch(addExpense({
    description:' Gas bill',
    amount: 500,
}))


store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 10}))
store.dispatch(addExpense({ description: 'Cofee', amount: 50, createdAt: -1}))
store.dispatch(addExpense({ description: 'Grocessary', amount: 300, createdAt:0}))

store.dispatch(setTextFilter(''))




const jsx= (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

root.render(jsx);