import React from "react";
import { connect } from "react-redux";
import getVisibleExpenses from"../selectors/expenses";
import getTotalExpenses from"../selectors/expenses-total"
import numeral from "numeral";

export const ExpenseSummary= ({ expenseCount, expensesTotal }) =>{
    const formatedTotal = numeral(expensesTotal / 100).format('$0,0.00')
    return (
        <div>
            <h3> There are total {expenseCount} expenses of {formatedTotal} . </h3>
        </div>
    )
}

const MapstateToProps = (state) =>{
    const visibleExpenses =  getVisibleExpenses(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: getTotalExpenses(visibleExpenses)
    }
}

export default connect(MapstateToProps)(ExpenseSummary)