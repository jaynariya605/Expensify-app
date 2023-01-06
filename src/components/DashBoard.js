import React from "react";
import ExpenseList from './ExpenseList';
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

export const DashBoard = (props) => (
    <div>
        {props.user.uid ?
            <div>
            <ExpensesSummary/>
            <ExpenseListFilters/>
            <ExpenseList />
            </div>
            : <Navigate to="/"/>}

    </div>
);

const mapStateToProps = (state) =>({
    user: state.auth
})

export default connect(mapStateToProps)(DashBoard)

