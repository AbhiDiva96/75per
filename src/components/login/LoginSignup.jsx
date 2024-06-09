import React, { useState } from "react";
import "./LoginSignup.css";
import {FaEye,FaEyeSlash} from 'react-icons/fa6'
const LoginSignup = () => {


  const [state, setState] = useState("Login");
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
    console.log("login");
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
            <>
           <p className="label-login">Name</p>
            <input type="text" name="username" value={formData.username} onChange={ChangeHandler} placeholder="Your Name" /></>
          ) : (
            <></>
          )}
          <p className="label-login">Email</p>
          <input type="email" name="email" value={formData.email} onChange={ChangeHandler} placeholder="Email Address" />

          <p className="label-login">Password</p>
          <input type={`${isVisible?"text":"password"}`} name="password" value={formData.password} onChange={ChangeHandler} placeholder="Password" />
          {isVisible?<FaEye color="white" className={`${state=='Sign Up'?"eye1":"eye"}`} onClick={()=>setIsVisible(false)} />:<FaEyeSlash className={`${state=='Sign Up'?"eye1":"eye"}`} color="white" onClick={()=>setIsVisible(true)}/>}
          </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
         {state === "Login" ? "Login" : "Sign Up"}
        </button>
        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              SignIn
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
             Sign Up
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
