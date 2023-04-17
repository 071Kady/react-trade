import React from "react";
import Headers from "components/Header";
import Products from "components/Products";

const App =()=>{
  return(
    <div className="main">
    <Headers nickname="Admin" />
    <Products />
  </div>
  )
}

export default App;
