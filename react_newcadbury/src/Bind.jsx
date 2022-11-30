
import { Component } from "react";

class Bind extends Component{
    state = {
        Gud : "Mrg"
    }
gmHandler = (Gud) => {
    this.setState({Gud:Gud})
}

render (){
    return <div>
<h2>Bind Method:{this.state.Gud}</h2>
<button onClick={this.gmHandler.bind(this,"Theju")}>HELLO</button>
<button onClick={this.gmHandler.bind(this,"Dev")}>HELLO</button>
<button onClick={this.gmHandler.bind(this,"panda")}>HELLO</button>
    </div>
}
}
export default Bind