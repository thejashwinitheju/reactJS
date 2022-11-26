import React,{Component} from "react"

class Clss extends Component{

    render (){
        return <div>
            <h4>cart component</h4>
          <pre>{JSON.stringify(this.props)}</pre>
          <h4>Product Name:{this.props.name}</h4>
          <h5>Product Price:{this.props.price}</h5>
          <h5>Product Color:{this.props.color[1]}</h5>
        </div>
    }
}
export default Clss