import React from "react";

class Ftocc extends React.Component{
    render(){
        return <div>
            <h1>Details</h1>
        <pre>{JSON.stringify(this.props)}</pre>
        <h5>Name:{this.props.prop1}</h5>
         <h5>Location:{this.props.prop2}</h5>  
         <h5>Phone:{this.props.prop3}</h5>         
         <h2>Email:{this.props.prop4}</h2>
        
        </div>
    }
}
export default Ftocc