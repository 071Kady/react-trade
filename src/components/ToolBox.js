import React, { useState } from "react";

const ToolBox = (props) =>{
  let [searchText,setSearchText]=useState("");
  const handleChange = (e) =>{
    setSearchText(e.target.value);
    props.search(e.target.value);
    //console.log(searchText);
  }
  const clearSearchText = () =>{
    setSearchText("");
    props.search("");
    //console.log(searchText);
  }
  return(
     <div className="tool-box">
      <div className="logo-text">STORE</div>
      <div className="search-box">
        <div className="field has-addons">
          <div className="control">
            <input 
            type="text" 
            className="input search-input" 
            placeholder="Search Product" 
            value={searchText} 
            onChange={e => handleChange(e)}/>
          </div>
          <div className="control">
            <button className="button" onClick={e=>clearSearchText(e)}>X</button>
          </div>
        </div>
      </div>
      <div className="cart-box">
        <i className="fas fa-shopping-cart"></i>
        <span className="cart-num">(0)</span>
      </div>
    </div>
  )
}

export default ToolBox;
