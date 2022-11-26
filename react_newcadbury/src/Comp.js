import React from 'react'
import Comp1 from './Comp1'

let Comp = () => {
 let first_Name = "Cadbury";
 let mob_Num = 12345;
    return <div>
     <Comp1 prop1={first_Name} prop2={mob_Num} />
        </div>
    
}
export default Comp
