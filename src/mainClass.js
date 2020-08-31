import React, {Component} from "react";
import Header from "./Header";
import Footer from "./Footer";
import client from "./Contentful";
import Main from "./main";
import Product from "./Product.js"
require('dotenv').config();

class MainClass extends Component {
constructor(){
  
  super();
  this.state={

    language:true,
    items:[],
    Loading:true,
    firstdraw:true,
    category:"orektika",
    foodcategoryitems:[],
     
  };

  this.languageChange= this.languageChange.bind(this);
  this.clickHandle= this.clickHandle.bind(this);
}

getProducts=async ()=>{
  try{
let response= await client.getEntries();

this.setState({items:response.items,foodcategoryitems:response.items.filter(items => items.fields.category ===this.state.category),Loading:false})
} catch (error){console.log(error);
}

};


componentDidMount(){

  setTimeout(this.getProducts, 1300);
 
//client.getEntries().then((response) =>{this.setState({items:(response.items),foodcategoryitems:this.state.items.filter(items => items.fields.category ===this.state.category),Loading:false})}).catch(console.error);


};  


languageChange(e){

e.preventDefault()

this.setState({language:!this.state.language});

};

clickHandle(e){

  e.preventDefault()

  this.setState({foodcategoryitems:this.state.items.filter(items => items.fields.category === e.target.id),firstdraw:false})
  window.scrollTo(0, 0);
  
    };

  render() {

     
    return ( 
  
  <React.Fragment>
    <Header languageChange={this.languageChange} language={this.state.language} clickHandle={this.clickHandle} firstdraw={this.state.firstdraw} />
    <div className="conta">
    <div className="container">
    {(this.state.Loading)?<Main />: this.state.foodcategoryitems.map(({fields}, i) =>
      <Product key={i} {...fields}{...this.state} />)}
          </div>
          </div>
    <Footer />
</React.Fragment>
  );
}
};

export default MainClass;