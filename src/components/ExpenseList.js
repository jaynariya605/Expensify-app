import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import { Navigate } from "react-router-dom";


export const ExpenseList = (props) =>(
    <div>
        <h1>Expense List</h1>
        {props.expenses.length ===0 ? (<p>No expense added</p>) : 
        
        (
            props.expenses.map((expense)=>{
                return (
                    <div key={expense.id}>
                    <ExpenseListItem  { ...expense}/>
                    </div>
                )
            })
        )
    }
        
    </div>
)

const mapStateToProps = (state)=>{
    return  {
        expenses: selectExpenses(state.expenses,state.filters),
    }
}

export default connect(mapStateToProps)(ExpenseList);

