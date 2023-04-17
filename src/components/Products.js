import React, { useEffect, useState } from "react";
import ToolBox from "./ToolBox";
import {CSSTransition, TransitionGroup} from "react-transition-group"
import axios from "commons/axios";
import Product from "./Product";
import Panel from "./Panel";

const Products = () => {
  let [products,setProdiucts] = useState([]);
  let [sourceProducts,setSourceProducts] = useState([]);
  let search = text =>{
    console.log(text);
    //1. Get New Array
    let _products = [...sourceProducts];
    //2. Filter New Array
    _products = _products.filter(p => { 
      //name: Abcd text: ab ===? ["Ab"]
      const matchArray = p.name.match(new RegExp(text,"gi"))
      return !!matchArray
    });
    setProdiucts(_products);
    //3. Set State
  };
  const toAdd = () => {
    
  }
  useEffect(()=>{
    axios.get('http://localhost:3003/products').then(reposnse=>{
      console.log(reposnse.data);
      setProdiucts(reposnse.data);
      setSourceProducts(reposnse.data);
    })
  },[])
  
  
  return(
    <div>
      <ToolBox search={search}/>
      <div className="products">
        <div className="columns is-multiline is-desktop">
          <TransitionGroup component={null} >
          {
            products.map(p=>{
              return(
                <CSSTransition classNames="product-fade" timeout={300} key={p.id}>
                  <div className="column is-3" key={p.id}>
                    <Product product={p}/>
                  </div>
                </CSSTransition>
              )
            })
          }
          </TransitionGroup>
        </div>
        <button className="button is-primary add-btn" onClick={toAdd}>add</button>
      </div>
    </div>
  )
}


export default Products;
