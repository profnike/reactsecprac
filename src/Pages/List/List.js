import React from "react";
import { useHistory } from "react-router-dom"

import {Link} from 'react-router-dom'


 const List=(props)=>{
const history=useHistory()
console.log(props.match)

return(
    <div className="Home">
        
        <h1>hist</h1>
        <h1>{props.match.params.topicid}</h1>
        <button onClick={()=>{history.push("/")}}>Gold</button>
        </div>
     
   
)}


export default List