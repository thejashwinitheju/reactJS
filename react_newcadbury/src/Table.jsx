import React, { Component } from "react";
import employees from "./Employee";


class Table extends Component {

    render(){
        return <div>
            <pre>{JSON.stringify(employees)}</pre>
            
       <h1>Employee Details</h1>
       <table borde="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>EMAIL</th>
                <th>GENDER</th>
             </tr>
        </thead>
        <tbody>
            {
                employees.map ((employees) => {
                     return <tr>
                        <td>{employees.id}</td>
                        <td>{employees.first_name}</td>
                        <td>{employees.last_name}</td>
                        <td>{employees.email}</td>
                        <td>{employees.gender}</td>
                     </tr>
                })
            }
        </tbody>
       </table>
        </div>
    }
}
export default Table