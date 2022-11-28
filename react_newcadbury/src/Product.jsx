import React, { Component } from "react";
 
class Product extends Component {
    state = {
        Product_Name:"iPhone" ,
        Image :  "https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70" ,
        Price :  59999,
        qty : 1, 
    }
    decHandler = () => {
        this.setState({qty:this.state.qty - 1})
    }
    incHandler = () => {
        this.setState({qty:this.state.qty + 1})
    }
    render(){
        return <div>
             <table className="table table-hover">
                <thead >
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.Product_Name}</td>
                        <td><img src={this.state.Image} height="100px"/></td>
                        <td>{this.state.Price}</td>
                        <td><i className="fa fa-minus-square" onClick={this.decHandler}></i>{this.state.qty} <i className="fa fa-plus-square" onClick={this.incHandler}></i> </td>
                        <td>{this.state.Price * this.state.qty}</td>

                        
                    </tr>
                </tbody>
                </table>

                </div>  
        
       
    }

}
export default Product