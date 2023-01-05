import React from 'react';
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import DashBoard from '../components/DashBoard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import NotFound from '../components/NotFound';


const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header/>
        <Routes>
            <Route path="/" element={<DashBoard/>}/>
            <Route path="/create" element={<AddExpense/>}/>
            <Route path="/edit/:id" element={<EditExpense/>}/>
            <Route path="/help" element={<Help/>}/>
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
    </div>
        
    </BrowserRouter>
);

export default AppRouter