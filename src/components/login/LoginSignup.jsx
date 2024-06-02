import React, { useState } from "react";
import "./LoginSignup.css";
import {FaEye,FaEyeSlash} from 'react-icons/fa6'
const LoginSignup = () => {


  const [state, setState] = useState("Sign Up");
  const [isVisible,setIsVisible]=useState(false)

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const handleSignInWithGoogle = () => {
    window.location.href = 'http://localhost:4000/auth/google'; // Redirect to the server route for Google OAuth login
  };

  const ChangeHandler=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const login = async () => {
    console.log("logim");
    let responseData;
    await fetch("http://localhost:4000/login",{
      method: "POST",
      headers:{
        Accept:'application/form-data',
        'content-Type':'application/json'
      },
      body: JSON.stringify(formData)
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/")
    }
    else{
      alert(responseData.errors);
    }
  };
  const signup = async () => {
    console.log("Sign up");
    let responseData;
    await fetch("http://localhost:4000/signup",{
      method: "POST",
      headers:{
        Accept:'application/form-data',
        'content-Type':'application/json'
      },
      body: JSON.stringify(formData)
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/")
    }
    else{
      alert(responseData.errors);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-cointainer">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? (
            <input type="text" name="username" value={formData.username} onChange={ChangeHandler} placeholder="Your Name" />
          ) : (
            <></>
          )}
          <input type="email" name="email" value={formData.email} onChange={ChangeHandler} placeholder="Email Address" />
          <div style={{position:"relative"}}>

          <input type={`${isVisible?"text":"password"}`} name="password" value={formData.password} onChange={ChangeHandler} placeholder="Password" />
          {isVisible?<FaEye className="eye" onClick={()=>setIsVisible(false)} />:<FaEyeSlash className="eye" onClick={()=>setIsVisible(true)}/>}
          </div>
        
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Login Here
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Click Here
            </span>
          </p>
        )}
        <div>
        {state === "Sign Up" ?
        <button onClick={handleSignInWithGoogle}>Sign Up with Google</button>:
        <button onClick={handleSignInWithGoogle}>Login with Google</button>}
      </div>

      </div>
    </div>
  );
};
export default LoginSignup;
