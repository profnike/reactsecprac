import React from "react";
import "../Homebody/Homebody.css"
import { useEffect,useState } from "react";
import Menuitem from "../menuitem/Menuitem";

const Homebody=()=>{
const[section,setSection]=useState([{
    title:"Hats",
    id:1,
    imageurl:"https://thumbs.dreamstime.com/b/hat-18089956.jpg",
   linkurl:"hat"
},
{
    title:"Jackets",
    id:2,
    imageurl:"https://5.imimg.com/data5/NM/LX/MY-42532489/mens-black-jacket-500x500.jpg",
   linkurl:""
},
{
    title:"Sneakers",
    id:3,
    imageurl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fhat.html&psig=AOvVaw3DnbmkPZEowmzvReS8QCFy&ust=1632227933786000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjGyobJjfMCFQAAAAAdAAAAABAN",
    linkurl:""
},
{
    title:"Men",
    id:4,
    imageurl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fhat.html&psig=AOvVaw3DnbmkPZEowmzvReS8QCFy&ust=1632227933786000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjGyobJjfMCFQAAAAAdAAAAABAN",
    size:"large",
    linkurl:""
},
{
    title:"Women",
    id:5,
    imageurl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fhat.html&psig=AOvVaw3DnbmkPZEowmzvReS8QCFy&ust=1632227933786000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjGyobJjfMCFQAAAAAdAAAAABAN",
    size:"large",
    linkurl:""
}

])
    

    return(
        <div className="Homebody">
          {section.map(({title,id,imageurl,size,linkurl})=>{
              return(
                  <Menuitem key={id} title={title} imageurl={imageurl} size={size} linkurl={linkurl} />
              )
            })}
        </div>
    )

}

export default Homebody