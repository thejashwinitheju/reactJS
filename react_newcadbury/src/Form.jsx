import React from "react";
import { Component } from "react";

class Form extends Component{
  state = {
    User_name:"",
    Email:"",
    Phon_NO: "",
    Password:""
  }

   updateHandler = (event) => {
        this.setState({[event.target.name]:event.target.value})
   }
   submitHandler(event){
       event.preventDefault();
       console.log(this.user)
       
       
   }
    render(){
        return <div>
            <h1>Form Validation</h1><br/><br/>
            <pre>{JSON.stringify(this.state)}</pre>
            <form onSubmit={this.submitHandler}>
                <label>User Name:</label>
            <input type="text" onChange={this.updateHandler} name = "User_name"/><br/>
            <label>Email:</label>
            <input type="text" onChange={this.updateHandler} name = "Email" /><br/>
            <label>Phone NO:</label>
            <input type="text" onChange={this.updateHandler} name = "Phon_NO" /><br/>
            <label>Password:</label>
            <input type="text" onChange={this.updateHandler} name = "Password" /><br/>
            
            <input type="submit" onChange={this.submitHandler}/>
            </form>
        </div>
    }
}
export default Form