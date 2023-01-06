import React from "react";
import { connect } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import{ startLogin } from'../actions/auth';


export class LoginPage extends React.Component{

    render(){
        return (
            <div>
            {this.props.user.uid ? 
                 <Navigate to='/dashboard'/> :
                <button onClick={this.props.startLogin}>Login </button>}
                
            </div>
        )
    }
}

const mapStateToProps = (state) =>(
    {
        user: state.auth
    }
)

const mapDispatchToProps = (dispatch) =>({
    startLogin: ()=> dispatch(startLogin()),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)