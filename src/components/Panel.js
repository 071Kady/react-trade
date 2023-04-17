import React, { useEffect, useState } from "react";
import * as ReactDOMClient from 'react-dom/client';


const Panel =()=>{
  let [active,setActive] = useState(false);
  
  const close = () => {
    setActive(false)
  }
  const open = () =>{
    setActive(true)
  }
  useEffect(()=>{
    setActive(true);
  },[])
  
  return(
    <div className={active===true? "panel-wrapper active":"panel-wrapper"}>
      <div className="over-layer" onClick={close}>
        <div className="panel">
          <div className="head">
            <span className="close" onClick={close}>x</span>
            <p className="has-text-centered">Children Component</p>
          </div>
        </div>
      </div>
    </div>    
  )
}

const _div =document.createElement("div");
document.body.appendChild(_div);
// Create a root.
const _panel = ReactDOMClient.createRoot(_div).render(<Panel/>);
console.log(_panel);
export default _panel;
