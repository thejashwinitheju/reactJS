import React from 'react'
import Ftocc from './Ftocc'

let Ftoc = () => {
    let P_Name ="theju"
    let P_location = 'aranakatte'
    let p_phone = 12345
   let email = "theju@gmail.com"


    return (<div>
    <Ftocc prop1 = {P_Name} 
           prop2 = {P_location}
           prop3 = {p_phone}
           prop4 = {email}      />
    </div>)
}
export default Ftoc