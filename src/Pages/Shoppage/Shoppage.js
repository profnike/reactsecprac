

import {Route, Switch} from 'react-router-dom'
import Shopdata from './Shopdata';
import Previewcollections from '../../Components/Preview-Collections/Previewcollections'

import React from "react";
import {useState} from 'react'

  
function Shoppage() {
 const [section, setSection]=useState(Shopdata)
 let arr=section
 console.log(arr.title)
  return (
    <div className="App" >
      <h1>Kilo</h1>
     
     {section.map(({id,title,items,imageurl})=>{
       return  (
     
       <Previewcollections key={id} title={title} items={items}   />)
       
      })} 
      
    </div>
  );
}

export default Shoppage;
