import React from "react";
import "../Home/Homepage.css"
import Menuitem from "../../Components/menuitem/Menuitem";
import Homebody from "../../Components/Homebody/Homebody";

import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom'

 const Details=(props)=>{

console.log(props)
const history=useHistory()

function send(props){
   <Link to="/"></Link>
}
return(
    <div className="Home">
        <Link className="links" to={`${props.match.url}/15`}><h1> Go to 15</h1></Link>
        <Link className="links" to={`${props.match.url}/16`}><h1> Go to 16</h1></Link>
        <Link className="links" to={`${props.match.url}/17`}><h1> Go to 17</h1></Link>
        <h1 >hip</h1>
       <button onClick={send}>send</button>
        
        </div>
     
   
)}



    export default Details