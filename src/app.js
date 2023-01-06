import React from 'react'; //require(react) ES5 and theese ES-6 
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import './firebase/firebase'


const root = createRoot(document.getElementById('app'));

const store = configureStore()

const jsx= (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

root.render(<p>Loading.....</p>);
store.dispatch(startSetExpenses()).then(()=>{
    root.render(jsx);
})
