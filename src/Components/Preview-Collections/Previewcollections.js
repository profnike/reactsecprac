import {Route, Switch} from 'react-router-dom'
import Shopdata from '../../Pages/Shoppage/Shopdata'
import React from "react";
import Collectionitem from '../../Components/Collection-item/Collection-item'

  
function Preview({title,items}) {
 console.log(title)
 console.log(items)
  return (
    <div className="App">
      <h1> {title}</h1>
      {items.filter((item,indx)=>{
        return (indx<4)} )
       .map(({id,name,price})=>{
       
       return(
         <Collectionitem key={id} price={price} name={name} imageurl={imageurl}/>
        
       )
     } 
    
      )}
   
    </div>
  );
}

export default Preview;