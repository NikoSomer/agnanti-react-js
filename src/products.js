import React from "react";
import productImgs from "./imgs/simple.jpg"

function Products() {
    
  return (
<div className="conta">
    <div className="container">

        <div className="rows">
            <div className="resimage">
                <div className="imgtxt">1.5 €</div>
            <img src={productImgs} alt="Ντάκος" style={{width:"100%"}}/>
                <div className="textcard"> 
                    <h4>Ντάκος</h4> 
                </div>
            </div>            
        </div>

        <div className="rows">
            <div className="resimage">
                <div className="imgtxt">1.5 €</div>
            <img src={productImgs} alt="Ντάκος" style={{width:"100%"}}/>
                <div className="textcard"> 
                    <h4>Ντάκος</h4> 
                </div>
            </div>            
        </div>

        <div className="rows">
            <div className="resimage">
                <div className="imgtxt">1.5 €</div>
            <img src={productImgs} alt="Ντάκος" style={{width:"100%"}}/>
                <div className="textcard"> 
                    <h4>Ντάκος</h4> 
                </div>
            </div>            
        </div>

        <div className="rows">
            <div className="resimage">
                <div className="imgtxt">1.5 €</div>
            <img src={productImgs} alt="Ντάκος" style={{width:"100%"}}/>
                <div className="textcard"> 
                    <h4>Ντάκος</h4> 
                </div>
            </div>            
        </div>

    </div>
</div>
    
  );
}
export default Products;