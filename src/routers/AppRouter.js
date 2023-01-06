import React from 'react';
import { BrowserRouter, Route, Routes, Link, NavLink, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import DashBoard from '../components/DashBoard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import LoginPage from '../components/LoginPage';
import NotFound from '../components/NotFound';
import {createBrowserHistory} from 'history';
import { connect } from 'react-redux';


const AppRouter = (props) => (
    <BrowserRouter >
    {props.user.uid && <Header/>}
        <Routes>
            <Route exact path="/" element={<LoginPage/>}  />
            <Route path="/dashboard" element={<DashBoard/>}/>
            <Route path="/create" element={<AddExpense/>}/>
            <Route path="/edit/:id" element={<EditExpense/>}/>
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
);

const mapStateToProps = (state) =>{
    return {
        user: state.auth
    }
}
export default connect(mapStateToProps)(AppRouter) 