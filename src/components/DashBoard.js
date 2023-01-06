import React from "react";
import ExpenseList from './ExpenseList';
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary"

const DashBoard = () => (
    <div>
        <ExpensesSummary/>
        <ExpenseListFilters/>
        <ExpenseList />
    </div>
);

export default DashBoard

