import React from "react";


export default function Header(props) {
  return (
    
        <header className="agnantiΒar top">
          <form onSubmit={props.languageChange}>
            <button className="navlang"  > {(props.language)?"EN":"ΕΛ"} </button>
          </form>
          <li className="barItem" id="agantimain">Αγνάντι</li>
          <nav className="scrollnav" >
            <li className={(props.firstdraw)?"menuClasses firstDraw":"menuClasses"} id="orektika" onClick={props.clickHandle}>{(props.language)?"Ορεκτικά":"Appetizers"}</li>
            <li className="menuClasses" id="grilled" onClick={props.clickHandle}>{(props.language)?"Σχάρας":"Grilled"}</li>
            <li className="menuClasses" id="salads" onClick={props.clickHandle}>{(props.language)?"Σαλάτες":"Salads"}</li>
            <li className="menuClasses" id="softdrinks" onClick={props.clickHandle}>{(props.language)?"Αναψυκτικά":"Soft drinks"}</li>
            <li className="menuClasses" id="dessert" onClick={props.clickHandle}>{(props.language)?"Γλυκά":"Desserts"}</li>
            <li className="menuClasses" id="coffees" onClick={props.clickHandle}>{(props.language)?"Καφέδες":"Coffees"}</li>      
            <li className="menuClasses" id="wineraki" onClick={props.clickHandle}>{(props.language)?"Κρασί/Ρακί":"Wine/Raki"}</li>
            <li className="menuClasses" id="beers" onClick={props.clickHandle}>{(props.language)?"Μπύρες":"Beers"}</li>      
            <li className="menuClasses" id="toast" onClick={props.clickHandle}>{(props.language)?"Τόστ":"Toasts"}</li>
            <li className="menuClasses" id="beverages" onClick={props.clickHandle}>{(props.language)?"Ποτά":"Beverages"}</li>
          </nav>
        </header>
        

    
  );
}