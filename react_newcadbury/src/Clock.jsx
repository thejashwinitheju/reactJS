import React, { Component } from "react";

class Clock extends Component {
  
    constructor(props){
        super(props)
        console.log("hello")
        this.state = {
           currentTime: new Date().toLocaleTimeString()
        }
    }
        componentDidMount(){
            setInterval(() => {
                this.setState({currentTime:new Date().toLocaleTimeString()})
            },1000 );
            console.log("helooo")
        }
    
    render(){
        console.log('heloo')
        return <div>
          <h1>Digital Clock</h1>
          <div className="container">
          <div className="row">
          <div className="col-md-6">
            <div className="card">
            <div className="card-header">
                <h3>CurrentTime:</h3>
            </div>
            <div className="card-body"><h1>{this.state.currentTime}</h1></div>
            </div>
          </div>
        </div>
        </div>
        </div>
    }
}
export default Clock