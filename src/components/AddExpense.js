import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";
import { Navigate, useNavigate } from "react-router-dom";


export class AddExpense extends React.Component{
    
    onSubmit = (expense) =>{
        this.props.startAddExpense(expense)
        this.props.navigate("/")
    }

    render(){
        return (
            <div>
            {this.props.user.uid ? 
                
                <div>
            
                    <h1>Add Expense</h1>
                    <ExpenseForm 
                    onSubmit = {this.onSubmit}
                    />
                </div>
                
                
                : <Navigate to="/"/>}
            </div>
            
        )
    }

}

const mapStateToProps = (state) => (
    {
        user: state.auth
    }
)

const mapDispatchToprops = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense)),
        navigate: useNavigate()
    })


export default connect(mapStateToProps,mapDispatchToprops )(AddExpense)