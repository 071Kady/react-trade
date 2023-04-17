import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props)=>{
  const [eamil,setEmail] = useState("");
  const history = useNavigate();
  const [password,setPassword] = useState("");
  const handleSubmit =(e) => {
    e.preventDefault();
    history("/");
  }
  const handleOnchange =(e)=>{
    if(e.target.name === "email")
    {
      setEmail(e.target.value)
    }
    else
    {
      setPassword(e.target.value)
    }
    const formData={
      "email" : eamil,
      "password":password
    }
    console.log(formData);
  }
  return(
    <React.Fragment>
    <div className="login-wrapper">
      <form className="box login-box" onSubmit={(e)=>handleSubmit(e)}>
        <div className="field">
          <label className="label">Email</label>  
          <div className="control">
            <input className="input" type="text"placeholder="Email" value={eamil} onChange={ (e)=>handleOnchange(e)} name="email"/>
          </div>
          <label className="label">Password</label>  
          <div className="control">
            <input className="input" type="text"placeholder="Password" value={password} onChange={(e)=>handleOnchange(e)} name="password"/>
          </div>
          <div className="control">
            <button className="button is-fullwidth is-primary">Login</button>
          </div>
        </div>
      </form>
    </div>
    </React.Fragment>
  )
}
export default Login;
