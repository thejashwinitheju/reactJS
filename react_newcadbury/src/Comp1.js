import React from "react"
let Comp1 = (prop) => {

    return <div>
            <pre>{JSON.stringify (prop)}</pre>
            <h3>Name:{prop.prop1}</h3>
            <h3>Phone:{prop.prop2}</h3>
        </div>
    
}
export default Comp1