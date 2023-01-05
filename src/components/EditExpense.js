import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";
import { useNavigate  } from "react-router-dom";


export class EditExpense extends React.Component{
  
    onSubmit = (update)=>{
        this.props.editExpense(this.props.match.id, update)
        this.props.navigate("/")
    }

    onClick = ()=> {
        this.props.removeExpense({ id : this.props.match.id })
        this.props.navigate("/")
    }

    render() {
        const expense = this.props.expenses.find((expense) => expense.id === this.props.match.id)

        return (
            <div>
                <ExpenseForm 
                expense={expense}
                onSubmit={this.onSubmit}/>
                <button onClick={this.onClick}>Remove</button>
        </div>
    )
    }

}

const Wrapper = (props) => {
    let params = useParams()
    return (<EditExpense { ...props } match={params} />)
}



const mapStateToProps = (state) =>{
    return {
        expenses: state.expenses   
    }
}

const mapDispatchToprops = (dispatch) =>{
    return {
        editExpense: (id, update) => dispatch(editExpense(id, update)),
        navigate: useNavigate(),
        removeExpense: ({id}) => dispatch(removeExpense({id}))
    }
}

export  default connect(mapStateToProps, mapDispatchToprops)(Wrapper)