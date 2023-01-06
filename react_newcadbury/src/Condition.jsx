import React from "react";
import { Component } from "react";

class Condition extends Component{
state = {
    isLoggin:false,
    msg:"",
}
loginHandler = () => {
    this.setState({isLoggin:true,msg:"Welcom to Pro Stack "})
}
logoutHandelr = () => {
    this.setState({isLoggin:true,msg:"Try for next time"})
}

    render(){
        return <div>
            <pre>{JSON.stringify(Condition)}</pre>
            <h1>Login Eg:{this.state.msg}</h1>
            <button onClick={this.loginHandler}>Login</button>
            <button onClick={this.logoutHandelr}>Logout</button>
        </div>
    }
}
export default Condition