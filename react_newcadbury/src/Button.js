import React, {Component} from 'react'
 

class Button extends Component{
    state = {
        msg: 'hello'

    }
    gmHandler = () => {
        this.setState({msg:'gm'})
    }
    gnHandler = () => {
        this.setState({msg:'gn'})
    }
    render(){
        return <div>
            <h4>msg:{this.state.msg}</h4>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}export default Button