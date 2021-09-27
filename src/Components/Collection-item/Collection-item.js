import React from 'react';
import '../Collection-item/Collection-item.css'



    const Collectionitem=({name,price,imageurl,title})=>{
    console.log(title)
    return(
        
        <div className="collectionitem">
            "hik"
            <div className="image" style={{backgroundImage:`url(${imageurl})`}}>
hi
            </div>
            <div className="footer">
                <span className="name">{title}</span>
                <span className="price">{price}</span>
            </div>

        </div>
    )
}
export default Collectionitem