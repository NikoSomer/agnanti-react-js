import React from "react";

const Product =(props)=> (
   
        <div className="rows">
            <div className="resimage">
                <div className="imgtxt">{props.price} €</div>
               
            <img src={props.img.fields.file.url} alt={props.alt} style={{width:"100%"}}/>
                <div className="textcard"> 
                    <h4>{(props.language)?props.titlegr:props.titleen}</h4> 
                </div>
            </div>            
        </div>
)
            
 

export default Product;