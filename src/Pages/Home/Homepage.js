import React from "react";
import "../Home/Homepage.css"
import Menuitem from "../../Components/menuitem/Menuitem";
import Homebody from "../../Components/Homebody/Homebody";
import {Link} from 'react-router-dom'


const Homepage=(props)=>{

console.log(props)

return(
    <div className="Home">
        
        <h1>hi</h1>
        <Homebody/>
        
        </div>
     
   
)}


export default Homepage