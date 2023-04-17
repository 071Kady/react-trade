import React from "react";
const Headers = (props) =>(
 <div className="header">
    <div className="grid">
      <div className="start">
        <a href="/" className="href">Home</a>
      </div>
      <div className="end">
        {
          props.nickname ? (
          <span className="nickname"><i className="far fa-user"></i>{props.nickname}</span>
          ):(
          <React.Fragment>
          <a href="/login" className="href">Login</a>
          <a href="/register" className="href">Register</a>
          </React.Fragment>)
        }
      </div>
    </div>
  </div>
)

export default Headers;
