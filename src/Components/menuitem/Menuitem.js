import React from "react";
import "../menuitem/Menuitem.css"
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { useRouteMatch } from "react-router-dom";



const Menuitem=({title,id,imageurl,size,linkurl})=>{
    const history=useHistory()
   const match = useRouteMatch();
   console.log(match.url)
    return(
        
        <div className={`${size} Menuitem`}
        
         >
            <div className="outer" style={{
            backgroundImage:`url(${imageurl})` 
           }}>
           <div className="content">
               <h2> {title}</h2>
            </div>
           
            </div>  
        </div>
    )}
    
    
    export default Menuitem