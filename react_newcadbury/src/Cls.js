import React,{Component} from 'react'
import Clss from './Clss'

class Cls extends Component{
    P_Name = "iPhone"
    P_Price = 50000
    P_Color = ['gray','Black']

    render(){
        return <div>
            <h1>product name</h1>
            <Clss  name = {this.P_Name}
                   price = {this.P_Price}
                   color = {this.P_Color}/>
        </div>
    }
}
export default Cls