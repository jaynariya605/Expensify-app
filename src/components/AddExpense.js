import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";
import { useNavigate } from "react-router-dom";


export class AddExpense extends React.Component{
    
    onSubmit = (expense) =>{
        this.props.startAddExpense(expense)
        this.props.navigate("/")
    }

    render(){
        return (
            <div>
            <h1>Add Expense</h1>
            <ExpenseForm 
            onSubmit = {this.onSubmit}
            />
            </div>
        )
    }

}

const mapDispatchToprops = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense)),
        navigate: useNavigate()
    })


export default connect(undefined,mapDispatchToprops )(AddExpense)